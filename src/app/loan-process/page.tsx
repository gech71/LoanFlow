'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PlusCircle, AlertTriangle, Clock, Loader2, ArrowRight, CheckSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription as AlertDescShadCN, AlertTitle as AlertTitleShadCN } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Types based on your Prisma schema
interface LoanStage {
  id: string;
  name: string;
  order: number | null;
}

interface Role {
  id: string;
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: Role | null;
}

interface LoanHistoryEntry {
  id: string;
  loanRequestId: string;
  stage: LoanStage | null;
  timestamp: Date;
  user: User | null;
  userName: string;
  notes: string | null;
  requiredFulfilment: string | null;
}

interface LoanDocument {
  id: string;
  loanRequestId: string;
  name: string;
  status: string;
}

interface LoanRequest {
  id: string;
  loanNumber: string;
  customerNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  loanAmount: number;
  loanType: string;
  loanPurpose: string;
  currentStage: LoanStage | null;
  submittedDate: Date;
  lastUpdatedDate: Date;
  assignedTo: User | null;
  stageDeadline: Date | null;
  isOverdue: boolean;
  isReadyForManagerReview: boolean;
  documents: LoanDocument[];
  history: LoanHistoryEntry[];
}

interface LoanCardProps {
  loan: LoanRequest;
  onCardActionClick: (loan: LoanRequest) => void;
}

function LoanCard({ loan, onCardActionClick }: LoanCardProps) {
  const canTakeAction = loan.currentStage?.name !== 'REJECTED' && loan.currentStage?.name !== 'FUNDS_DISBURSED';
  const actionButtonText = loan.isReadyForManagerReview ? "Promote" : "Mark Complete";
  const ActionIcon = loan.isReadyForManagerReview ? ArrowRight : CheckSquare;
  const currentStageName = loan.currentStage?.name || '';

  return (
    <Card className="mb-3 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-semibold">
            <Link href={`/loan-requests/${loan.id}`} className="hover:underline">
              {loan.customerName}
            </Link>
          </CardTitle>
          {loan.isOverdue && (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </TooltipTrigger>
                <TooltipContent><p>This loan process is overdue.</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <CardDescription className="text-xs">{loan.loanNumber} / {loan.customerNumber}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm space-y-2">
        <p>Amount: ${loan.loanAmount.toLocaleString()}</p>
        <p>Type: {loan.loanType}</p>
        {loan.stageDeadline && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Deadline: {format(loan.stageDeadline, 'MMM dd, yyyy')}
          </div>
        )}
        {currentStageName === 'ADDITIONAL_INFO_REQUIRED' && 
          loan.history.find(h => h.stage?.name === 'ADDITIONAL_INFO_REQUIRED' && h.requiredFulfilment)?.requiredFulfilment && (
          <Badge variant="outline" className="mt-2 text-amber-700 border-amber-500">
            Action Needed: {
              loan.history.find(h => h.stage?.name === 'ADDITIONAL_INFO_REQUIRED' && h.requiredFulfilment)?.requiredFulfilment
            }
          </Badge>
        )}
        {loan.isReadyForManagerReview && (
          <Badge variant="outline" className="mt-2 text-orange-600 border-orange-400 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-300">
            Awaiting Manager Review
          </Badge>
        )}
        {canTakeAction && (
          <Button variant="outline" size="sm" className="w-full mt-2" onClick={() => onCardActionClick(loan)}>
            <ActionIcon className="mr-2 h-4 w-4" /> {actionButtonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

interface KanbanColumnProps {
  stage: LoanStage;
  loans: LoanRequest[];
  onCardActionClick: (loan: LoanRequest) => void;
}

function KanbanColumn({ stage, loans, onCardActionClick }: KanbanColumnProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-muted/50 rounded-lg p-1 md:p-2 min-h-[300px]">
      <div className="flex justify-between items-center p-2 mb-2">
        <h3 className="font-semibold text-foreground">{stage.name}</h3>
        <Badge variant="secondary">{loans.length}</Badge>
      </div>
      <ScrollArea className="h-[calc(100vh-20rem)] pr-2">
        {loans.length === 0 && (
          <div className="flex flex-col items-center justify-center h-40 text-sm text-muted-foreground p-4 text-center">
            <p>No loan requests in this stage.</p>
          </div>
        )}
        {loans.map((loan) => (
          <LoanCard key={loan.id} loan={loan} onCardActionClick={onCardActionClick} />
        ))}
      </ScrollArea>
    </div>
  );
}

interface PipelinePromoteDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  selectedLoan: LoanRequest | null;
  onConfirmPromotion: (loanId: string, nextStageId: string) => Promise<void>;
  isSavingPromotion: boolean;
  stages: LoanStage[];
}

function PipelinePromoteDialog({
  isOpen, onOpenChange, selectedLoan,
  onConfirmPromotion, isSavingPromotion, stages
}: PipelinePromoteDialogProps) {
  const [selectedNextStageId, setSelectedNextStageId] = useState<string>('');

  useEffect(() => {
    if (isOpen && selectedLoan) {
      setSelectedNextStageId('');
    }
  }, [isOpen, selectedLoan]);

  // Find the current stage index
  const getCurrentStageIndex = (stageId: string) => {
    return stages.findIndex(s => s.id === stageId);
  };

  // Get available next stages
  const availableNextStages = (currentStageId: string): LoanStage[] => {
    const currentIndex = getCurrentStageIndex(currentStageId);
    if (currentIndex === -1) return [];
    
    return stages.filter((_, index) => index > currentIndex);
  };

  const handleConfirm = async () => {
    if (!selectedLoan || !selectedNextStageId) return;
    await onConfirmPromotion(selectedLoan.id, selectedNextStageId);
  };

  if (!selectedLoan || !selectedLoan.currentStage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Promote Loan for {selectedLoan.customerName}</DialogTitle>
          <DialogDescription>
            Current Stage: {selectedLoan.currentStage.name}. Select the next stage.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="next-stage-pipeline">Next Stage</Label>
            <Select 
              value={selectedNextStageId} 
              onValueChange={setSelectedNextStageId}
            >
              <SelectTrigger id="next-stage-pipeline" className="mt-1">
                <SelectValue placeholder="Select next stage" />
              </SelectTrigger>
              <SelectContent>
                {availableNextStages(selectedLoan.currentStage.id).map(stage => (
                  <SelectItem key={stage.id} value={stage.id}>
                    {stage.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" disabled={isSavingPromotion}>Cancel</Button>
          </DialogClose>
          <Button 
            type="button" 
            onClick={handleConfirm} 
            disabled={isSavingPromotion || !selectedNextStageId}
          >
            {isSavingPromotion && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirm & Promote
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function LoanProcessPage() {
  const [allLoans, setAllLoans] = useState<LoanRequest[]>([]);
  const [stages, setStages] = useState<LoanStage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [isPromoteDialogOpen, setIsPromoteDialogOpen] = useState(false);
  const [selectedLoanForDialog, setSelectedLoanForDialog] = useState<LoanRequest | null>(null);
  const [isProcessingAction, setIsProcessingAction] = useState(false); 

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Fetch stages
      const stagesResponse = await fetch('/api/loan-stages');
      if (!stagesResponse.ok) throw new Error('Failed to fetch stages');
      const stagesData = await stagesResponse.json();
      setStages(stagesData);

      // Fetch loans
      const loansResponse = await fetch('/api/loan-requests');
      if (!loansResponse.ok) throw new Error('Failed to fetch loans');
      const loansData = await loansResponse.json();
      setAllLoans(loansData.loans);
      
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCardActionClick = useCallback(async (loan: LoanRequest) => {
    setSelectedLoanForDialog(loan);
    if (loan.isReadyForManagerReview) {
      setIsPromoteDialogOpen(true);
    } else {
      try {
        setIsProcessingAction(true);
        
        // Update loan to mark as ready for review
        const response = await fetch(`/api/loan-requests/${loan.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            isReadyForManagerReview: true,
            history: [
              ...loan.history,
              {
                stageId: loan.currentStage?.id,
                timestamp: new Date(),
                userName: 'System',
                notes: `Stage '${loan.currentStage?.name}' marked complete by officer. Submitted for manager review.`,
              }
            ]
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.log('[LoanProcessPage] Error updating loan:', errorData);
          
          throw new Error(errorData.error || "Failed to update loan");
        }

        const updatedLoan = await response.json();
        
        // Update local state
        setAllLoans(prev => 
          prev.map(l => l.id === loan.id ? updatedLoan : l)
        );

        toast({ 
          title: "Success", 
          description: `${loan.customerName}'s stage marked complete. Awaiting manager review.` 
        });
        
      } catch (err: any) {
        toast({ 
          title: "Error", 
          description: err.message || "Failed to update loan", 
          variant: "destructive" 
        });
      } finally {
        setIsProcessingAction(false);
      }
    }
  }, [toast]);

  const handleConfirmPromotion = useCallback(async (loanId: string, nextStageId: string) => {
    try {
      setIsProcessingAction(true);
      const loan = allLoans.find(l => l.id === loanId);
      if (!loan) throw new Error("Loan not found");

      const nextStage = stages.find(s => s.id === nextStageId);
      if (!nextStage) throw new Error("Stage not found");

      // Update loan to next stage
      const response = await fetch(`/api/loan-requests/${loanId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentStageId: nextStageId,
          isReadyForManagerReview: false,
          assignedToId: null,
          history: [
            ...loan.history,
            {
              stageId: nextStageId,
              timestamp: new Date(),
              userName: 'System',
              notes: `Manager promoted to ${nextStage.name}. Case is now unassigned.`
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update loan");
      }

      const updatedLoan = await response.json();
      
      // Update local state
      setAllLoans(prev => 
        prev.map(l => l.id === loanId ? updatedLoan : l)
      );

      setIsPromoteDialogOpen(false);
      setSelectedLoanForDialog(null);
      
      toast({ 
        title: "Success", 
        description: `${loan.customerName} moved to ${nextStage.name} and is now unassigned.` 
      });
      
    } catch (err: any) {
      toast({ 
        title: "Error", 
        description: err.message || "Failed to promote loan", 
        variant: "destructive" 
      });
    } finally {
      setIsProcessingAction(false);
    }
  }, [allLoans, stages, toast]);

  // Group loans by stage
  const loansByStageId = allLoans.reduce((acc, loan) => {
    const stageId = loan.currentStage?.id || 'unassigned';
    if (!acc[stageId]) acc[stageId] = [];
    acc[stageId].push(loan);
    return acc;
  }, {} as Record<string, LoanRequest[]>);

  if (isLoading && allLoans.length === 0) { 
    return (
      <div className="flex items-center justify-center h-full min-h-[calc(100vh-10rem)]">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="ml-3 text-lg">Loading loan pipeline...</p>
      </div>
    );
  }

  if (error && allLoans.length === 0) { 
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitleShadCN>Error Fetching Loans</AlertTitleShadCN>
        <AlertDescShadCN className="whitespace-pre-wrap">
          {error} Please try refreshing the page.
        </AlertDescShadCN>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Loan Pipeline</h1>
          <p className="text-muted-foreground">Visualize and manage loan applications through various stages.</p>
        </div>
        <Link href="/loan-requests/new" passHref>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Loan Request
          </Button>
        </Link>
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex gap-4">
          {stages.map((stage) => (
            <KanbanColumn 
              key={stage.id} 
              stage={stage} 
              loans={loansByStageId[stage.id] || []} 
              onCardActionClick={handleCardActionClick} 
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      
      <PipelinePromoteDialog
        isOpen={isPromoteDialogOpen}
        onOpenChange={(isOpen) => { 
          setIsPromoteDialogOpen(isOpen); 
          if (!isOpen) setSelectedLoanForDialog(null); 
        }}
        selectedLoan={selectedLoanForDialog}
        onConfirmPromotion={handleConfirmPromotion}
        isSavingPromotion={isProcessingAction}
        stages={stages}
      />
    </div>
  );
}