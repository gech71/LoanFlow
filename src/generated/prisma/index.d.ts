
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model LoanStage
 * 
 */
export type LoanStage = $Result.DefaultSelection<Prisma.$LoanStagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LoanRequest
 * 
 */
export type LoanRequest = $Result.DefaultSelection<Prisma.$LoanRequestPayload>
/**
 * Model LoanDocument
 * 
 */
export type LoanDocument = $Result.DefaultSelection<Prisma.$LoanDocumentPayload>
/**
 * Model LoanHistoryEntry
 * 
 */
export type LoanHistoryEntry = $Result.DefaultSelection<Prisma.$LoanHistoryEntryPayload>
/**
 * Model StageConfig
 * 
 */
export type StageConfig = $Result.DefaultSelection<Prisma.$StageConfigPayload>
/**
 * Model RequiredDocumentConfig
 * 
 */
export type RequiredDocumentConfig = $Result.DefaultSelection<Prisma.$RequiredDocumentConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanStage`: Exposes CRUD operations for the **LoanStage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanStages
    * const loanStages = await prisma.loanStage.findMany()
    * ```
    */
  get loanStage(): Prisma.LoanStageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanRequest`: Exposes CRUD operations for the **LoanRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanRequests
    * const loanRequests = await prisma.loanRequest.findMany()
    * ```
    */
  get loanRequest(): Prisma.LoanRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanDocument`: Exposes CRUD operations for the **LoanDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanDocuments
    * const loanDocuments = await prisma.loanDocument.findMany()
    * ```
    */
  get loanDocument(): Prisma.LoanDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanHistoryEntry`: Exposes CRUD operations for the **LoanHistoryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanHistoryEntries
    * const loanHistoryEntries = await prisma.loanHistoryEntry.findMany()
    * ```
    */
  get loanHistoryEntry(): Prisma.LoanHistoryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stageConfig`: Exposes CRUD operations for the **StageConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StageConfigs
    * const stageConfigs = await prisma.stageConfig.findMany()
    * ```
    */
  get stageConfig(): Prisma.StageConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requiredDocumentConfig`: Exposes CRUD operations for the **RequiredDocumentConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequiredDocumentConfigs
    * const requiredDocumentConfigs = await prisma.requiredDocumentConfig.findMany()
    * ```
    */
  get requiredDocumentConfig(): Prisma.RequiredDocumentConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    LoanStage: 'LoanStage',
    User: 'User',
    LoanRequest: 'LoanRequest',
    LoanDocument: 'LoanDocument',
    LoanHistoryEntry: 'LoanHistoryEntry',
    StageConfig: 'StageConfig',
    RequiredDocumentConfig: 'RequiredDocumentConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "loanStage" | "user" | "loanRequest" | "loanDocument" | "loanHistoryEntry" | "stageConfig" | "requiredDocumentConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      LoanStage: {
        payload: Prisma.$LoanStagePayload<ExtArgs>
        fields: Prisma.LoanStageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanStageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanStageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>
          }
          findFirst: {
            args: Prisma.LoanStageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanStageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>
          }
          findMany: {
            args: Prisma.LoanStageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>[]
          }
          create: {
            args: Prisma.LoanStageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>
          }
          createMany: {
            args: Prisma.LoanStageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanStageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>[]
          }
          delete: {
            args: Prisma.LoanStageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>
          }
          update: {
            args: Prisma.LoanStageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>
          }
          deleteMany: {
            args: Prisma.LoanStageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanStageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanStageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>[]
          }
          upsert: {
            args: Prisma.LoanStageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanStagePayload>
          }
          aggregate: {
            args: Prisma.LoanStageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanStage>
          }
          groupBy: {
            args: Prisma.LoanStageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanStageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanStageCountArgs<ExtArgs>
            result: $Utils.Optional<LoanStageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LoanRequest: {
        payload: Prisma.$LoanRequestPayload<ExtArgs>
        fields: Prisma.LoanRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          findFirst: {
            args: Prisma.LoanRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          findMany: {
            args: Prisma.LoanRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>[]
          }
          create: {
            args: Prisma.LoanRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          createMany: {
            args: Prisma.LoanRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>[]
          }
          delete: {
            args: Prisma.LoanRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          update: {
            args: Prisma.LoanRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          deleteMany: {
            args: Prisma.LoanRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>[]
          }
          upsert: {
            args: Prisma.LoanRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          aggregate: {
            args: Prisma.LoanRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanRequest>
          }
          groupBy: {
            args: Prisma.LoanRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LoanRequestCountAggregateOutputType> | number
          }
        }
      }
      LoanDocument: {
        payload: Prisma.$LoanDocumentPayload<ExtArgs>
        fields: Prisma.LoanDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>
          }
          findFirst: {
            args: Prisma.LoanDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>
          }
          findMany: {
            args: Prisma.LoanDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>[]
          }
          create: {
            args: Prisma.LoanDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>
          }
          createMany: {
            args: Prisma.LoanDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>[]
          }
          delete: {
            args: Prisma.LoanDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>
          }
          update: {
            args: Prisma.LoanDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>
          }
          deleteMany: {
            args: Prisma.LoanDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>[]
          }
          upsert: {
            args: Prisma.LoanDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanDocumentPayload>
          }
          aggregate: {
            args: Prisma.LoanDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanDocument>
          }
          groupBy: {
            args: Prisma.LoanDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<LoanDocumentCountAggregateOutputType> | number
          }
        }
      }
      LoanHistoryEntry: {
        payload: Prisma.$LoanHistoryEntryPayload<ExtArgs>
        fields: Prisma.LoanHistoryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanHistoryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanHistoryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>
          }
          findFirst: {
            args: Prisma.LoanHistoryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanHistoryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>
          }
          findMany: {
            args: Prisma.LoanHistoryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>[]
          }
          create: {
            args: Prisma.LoanHistoryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>
          }
          createMany: {
            args: Prisma.LoanHistoryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanHistoryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>[]
          }
          delete: {
            args: Prisma.LoanHistoryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>
          }
          update: {
            args: Prisma.LoanHistoryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>
          }
          deleteMany: {
            args: Prisma.LoanHistoryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanHistoryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanHistoryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>[]
          }
          upsert: {
            args: Prisma.LoanHistoryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanHistoryEntryPayload>
          }
          aggregate: {
            args: Prisma.LoanHistoryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanHistoryEntry>
          }
          groupBy: {
            args: Prisma.LoanHistoryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanHistoryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanHistoryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LoanHistoryEntryCountAggregateOutputType> | number
          }
        }
      }
      StageConfig: {
        payload: Prisma.$StageConfigPayload<ExtArgs>
        fields: Prisma.StageConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>
          }
          findFirst: {
            args: Prisma.StageConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>
          }
          findMany: {
            args: Prisma.StageConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>[]
          }
          create: {
            args: Prisma.StageConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>
          }
          createMany: {
            args: Prisma.StageConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StageConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>[]
          }
          delete: {
            args: Prisma.StageConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>
          }
          update: {
            args: Prisma.StageConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>
          }
          deleteMany: {
            args: Prisma.StageConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StageConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>[]
          }
          upsert: {
            args: Prisma.StageConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StageConfigPayload>
          }
          aggregate: {
            args: Prisma.StageConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStageConfig>
          }
          groupBy: {
            args: Prisma.StageConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageConfigCountArgs<ExtArgs>
            result: $Utils.Optional<StageConfigCountAggregateOutputType> | number
          }
        }
      }
      RequiredDocumentConfig: {
        payload: Prisma.$RequiredDocumentConfigPayload<ExtArgs>
        fields: Prisma.RequiredDocumentConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequiredDocumentConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequiredDocumentConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>
          }
          findFirst: {
            args: Prisma.RequiredDocumentConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequiredDocumentConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>
          }
          findMany: {
            args: Prisma.RequiredDocumentConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>[]
          }
          create: {
            args: Prisma.RequiredDocumentConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>
          }
          createMany: {
            args: Prisma.RequiredDocumentConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequiredDocumentConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>[]
          }
          delete: {
            args: Prisma.RequiredDocumentConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>
          }
          update: {
            args: Prisma.RequiredDocumentConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>
          }
          deleteMany: {
            args: Prisma.RequiredDocumentConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequiredDocumentConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequiredDocumentConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>[]
          }
          upsert: {
            args: Prisma.RequiredDocumentConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequiredDocumentConfigPayload>
          }
          aggregate: {
            args: Prisma.RequiredDocumentConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequiredDocumentConfig>
          }
          groupBy: {
            args: Prisma.RequiredDocumentConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequiredDocumentConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequiredDocumentConfigCountArgs<ExtArgs>
            result: $Utils.Optional<RequiredDocumentConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    loanStage?: LoanStageOmit
    user?: UserOmit
    loanRequest?: LoanRequestOmit
    loanDocument?: LoanDocumentOmit
    loanHistoryEntry?: LoanHistoryEntryOmit
    stageConfig?: StageConfigOmit
    requiredDocumentConfig?: RequiredDocumentConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    stageConfigs: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    stageConfigs?: boolean | RoleCountOutputTypeCountStageConfigsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountStageConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageConfigWhereInput
  }


  /**
   * Count Type LoanStageCountOutputType
   */

  export type LoanStageCountOutputType = {
    loanRequests: number
    historyEntries: number
    stageConfigs: number
  }

  export type LoanStageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequests?: boolean | LoanStageCountOutputTypeCountLoanRequestsArgs
    historyEntries?: boolean | LoanStageCountOutputTypeCountHistoryEntriesArgs
    stageConfigs?: boolean | LoanStageCountOutputTypeCountStageConfigsArgs
  }

  // Custom InputTypes
  /**
   * LoanStageCountOutputType without action
   */
  export type LoanStageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStageCountOutputType
     */
    select?: LoanStageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanStageCountOutputType without action
   */
  export type LoanStageCountOutputTypeCountLoanRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanRequestWhereInput
  }

  /**
   * LoanStageCountOutputType without action
   */
  export type LoanStageCountOutputTypeCountHistoryEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanHistoryEntryWhereInput
  }

  /**
   * LoanStageCountOutputType without action
   */
  export type LoanStageCountOutputTypeCountStageConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageConfigWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedLoans: number
    historyEntries: number
    subordinates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedLoans?: boolean | UserCountOutputTypeCountAssignedLoansArgs
    historyEntries?: boolean | UserCountOutputTypeCountHistoryEntriesArgs
    subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanHistoryEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type LoanRequestCountOutputType
   */

  export type LoanRequestCountOutputType = {
    documents: number
    history: number
  }

  export type LoanRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | LoanRequestCountOutputTypeCountDocumentsArgs
    history?: boolean | LoanRequestCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * LoanRequestCountOutputType without action
   */
  export type LoanRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequestCountOutputType
     */
    select?: LoanRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanRequestCountOutputType without action
   */
  export type LoanRequestCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanDocumentWhereInput
  }

  /**
   * LoanRequestCountOutputType without action
   */
  export type LoanRequestCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanHistoryEntryWhereInput
  }


  /**
   * Count Type StageConfigCountOutputType
   */

  export type StageConfigCountOutputType = {
    requiredDocuments: number
  }

  export type StageConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requiredDocuments?: boolean | StageConfigCountOutputTypeCountRequiredDocumentsArgs
  }

  // Custom InputTypes
  /**
   * StageConfigCountOutputType without action
   */
  export type StageConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfigCountOutputType
     */
    select?: StageConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StageConfigCountOutputType without action
   */
  export type StageConfigCountOutputTypeCountRequiredDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequiredDocumentConfigWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    stageConfigs?: boolean | Role$stageConfigsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    stageConfigs?: boolean | Role$stageConfigsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      stageConfigs: Prisma.$StageConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stageConfigs<T extends Role$stageConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Role$stageConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.stageConfigs
   */
  export type Role$stageConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    where?: StageConfigWhereInput
    orderBy?: StageConfigOrderByWithRelationInput | StageConfigOrderByWithRelationInput[]
    cursor?: StageConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageConfigScalarFieldEnum | StageConfigScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model LoanStage
   */

  export type AggregateLoanStage = {
    _count: LoanStageCountAggregateOutputType | null
    _avg: LoanStageAvgAggregateOutputType | null
    _sum: LoanStageSumAggregateOutputType | null
    _min: LoanStageMinAggregateOutputType | null
    _max: LoanStageMaxAggregateOutputType | null
  }

  export type LoanStageAvgAggregateOutputType = {
    order: number | null
  }

  export type LoanStageSumAggregateOutputType = {
    order: number | null
  }

  export type LoanStageMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanStageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanStageCountAggregateOutputType = {
    id: number
    name: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanStageAvgAggregateInputType = {
    order?: true
  }

  export type LoanStageSumAggregateInputType = {
    order?: true
  }

  export type LoanStageMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanStageMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanStageCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanStageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanStage to aggregate.
     */
    where?: LoanStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStages to fetch.
     */
    orderBy?: LoanStageOrderByWithRelationInput | LoanStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanStages
    **/
    _count?: true | LoanStageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanStageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanStageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanStageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanStageMaxAggregateInputType
  }

  export type GetLoanStageAggregateType<T extends LoanStageAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanStage[P]>
      : GetScalarType<T[P], AggregateLoanStage[P]>
  }




  export type LoanStageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanStageWhereInput
    orderBy?: LoanStageOrderByWithAggregationInput | LoanStageOrderByWithAggregationInput[]
    by: LoanStageScalarFieldEnum[] | LoanStageScalarFieldEnum
    having?: LoanStageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanStageCountAggregateInputType | true
    _avg?: LoanStageAvgAggregateInputType
    _sum?: LoanStageSumAggregateInputType
    _min?: LoanStageMinAggregateInputType
    _max?: LoanStageMaxAggregateInputType
  }

  export type LoanStageGroupByOutputType = {
    id: string
    name: string
    description: string | null
    order: number | null
    createdAt: Date
    updatedAt: Date
    _count: LoanStageCountAggregateOutputType | null
    _avg: LoanStageAvgAggregateOutputType | null
    _sum: LoanStageSumAggregateOutputType | null
    _min: LoanStageMinAggregateOutputType | null
    _max: LoanStageMaxAggregateOutputType | null
  }

  type GetLoanStageGroupByPayload<T extends LoanStageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanStageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanStageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanStageGroupByOutputType[P]>
            : GetScalarType<T[P], LoanStageGroupByOutputType[P]>
        }
      >
    >


  export type LoanStageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequests?: boolean | LoanStage$loanRequestsArgs<ExtArgs>
    historyEntries?: boolean | LoanStage$historyEntriesArgs<ExtArgs>
    stageConfigs?: boolean | LoanStage$stageConfigsArgs<ExtArgs>
    _count?: boolean | LoanStageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanStage"]>

  export type LoanStageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["loanStage"]>

  export type LoanStageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["loanStage"]>

  export type LoanStageSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanStageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["loanStage"]>
  export type LoanStageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequests?: boolean | LoanStage$loanRequestsArgs<ExtArgs>
    historyEntries?: boolean | LoanStage$historyEntriesArgs<ExtArgs>
    stageConfigs?: boolean | LoanStage$stageConfigsArgs<ExtArgs>
    _count?: boolean | LoanStageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoanStageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LoanStageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LoanStagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanStage"
    objects: {
      loanRequests: Prisma.$LoanRequestPayload<ExtArgs>[]
      historyEntries: Prisma.$LoanHistoryEntryPayload<ExtArgs>[]
      stageConfigs: Prisma.$StageConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      order: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loanStage"]>
    composites: {}
  }

  type LoanStageGetPayload<S extends boolean | null | undefined | LoanStageDefaultArgs> = $Result.GetResult<Prisma.$LoanStagePayload, S>

  type LoanStageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanStageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanStageCountAggregateInputType | true
    }

  export interface LoanStageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanStage'], meta: { name: 'LoanStage' } }
    /**
     * Find zero or one LoanStage that matches the filter.
     * @param {LoanStageFindUniqueArgs} args - Arguments to find a LoanStage
     * @example
     * // Get one LoanStage
     * const loanStage = await prisma.loanStage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanStageFindUniqueArgs>(args: SelectSubset<T, LoanStageFindUniqueArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanStage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanStageFindUniqueOrThrowArgs} args - Arguments to find a LoanStage
     * @example
     * // Get one LoanStage
     * const loanStage = await prisma.loanStage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanStageFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanStageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanStage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageFindFirstArgs} args - Arguments to find a LoanStage
     * @example
     * // Get one LoanStage
     * const loanStage = await prisma.loanStage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanStageFindFirstArgs>(args?: SelectSubset<T, LoanStageFindFirstArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanStage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageFindFirstOrThrowArgs} args - Arguments to find a LoanStage
     * @example
     * // Get one LoanStage
     * const loanStage = await prisma.loanStage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanStageFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanStageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanStages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanStages
     * const loanStages = await prisma.loanStage.findMany()
     * 
     * // Get first 10 LoanStages
     * const loanStages = await prisma.loanStage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanStageWithIdOnly = await prisma.loanStage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanStageFindManyArgs>(args?: SelectSubset<T, LoanStageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanStage.
     * @param {LoanStageCreateArgs} args - Arguments to create a LoanStage.
     * @example
     * // Create one LoanStage
     * const LoanStage = await prisma.loanStage.create({
     *   data: {
     *     // ... data to create a LoanStage
     *   }
     * })
     * 
     */
    create<T extends LoanStageCreateArgs>(args: SelectSubset<T, LoanStageCreateArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanStages.
     * @param {LoanStageCreateManyArgs} args - Arguments to create many LoanStages.
     * @example
     * // Create many LoanStages
     * const loanStage = await prisma.loanStage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanStageCreateManyArgs>(args?: SelectSubset<T, LoanStageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanStages and returns the data saved in the database.
     * @param {LoanStageCreateManyAndReturnArgs} args - Arguments to create many LoanStages.
     * @example
     * // Create many LoanStages
     * const loanStage = await prisma.loanStage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanStages and only return the `id`
     * const loanStageWithIdOnly = await prisma.loanStage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanStageCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanStageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanStage.
     * @param {LoanStageDeleteArgs} args - Arguments to delete one LoanStage.
     * @example
     * // Delete one LoanStage
     * const LoanStage = await prisma.loanStage.delete({
     *   where: {
     *     // ... filter to delete one LoanStage
     *   }
     * })
     * 
     */
    delete<T extends LoanStageDeleteArgs>(args: SelectSubset<T, LoanStageDeleteArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanStage.
     * @param {LoanStageUpdateArgs} args - Arguments to update one LoanStage.
     * @example
     * // Update one LoanStage
     * const loanStage = await prisma.loanStage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanStageUpdateArgs>(args: SelectSubset<T, LoanStageUpdateArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanStages.
     * @param {LoanStageDeleteManyArgs} args - Arguments to filter LoanStages to delete.
     * @example
     * // Delete a few LoanStages
     * const { count } = await prisma.loanStage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanStageDeleteManyArgs>(args?: SelectSubset<T, LoanStageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanStages
     * const loanStage = await prisma.loanStage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanStageUpdateManyArgs>(args: SelectSubset<T, LoanStageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanStages and returns the data updated in the database.
     * @param {LoanStageUpdateManyAndReturnArgs} args - Arguments to update many LoanStages.
     * @example
     * // Update many LoanStages
     * const loanStage = await prisma.loanStage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanStages and only return the `id`
     * const loanStageWithIdOnly = await prisma.loanStage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanStageUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanStageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanStage.
     * @param {LoanStageUpsertArgs} args - Arguments to update or create a LoanStage.
     * @example
     * // Update or create a LoanStage
     * const loanStage = await prisma.loanStage.upsert({
     *   create: {
     *     // ... data to create a LoanStage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanStage we want to update
     *   }
     * })
     */
    upsert<T extends LoanStageUpsertArgs>(args: SelectSubset<T, LoanStageUpsertArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageCountArgs} args - Arguments to filter LoanStages to count.
     * @example
     * // Count the number of LoanStages
     * const count = await prisma.loanStage.count({
     *   where: {
     *     // ... the filter for the LoanStages we want to count
     *   }
     * })
    **/
    count<T extends LoanStageCountArgs>(
      args?: Subset<T, LoanStageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanStageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanStageAggregateArgs>(args: Subset<T, LoanStageAggregateArgs>): Prisma.PrismaPromise<GetLoanStageAggregateType<T>>

    /**
     * Group by LoanStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanStageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanStageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanStageGroupByArgs['orderBy'] }
        : { orderBy?: LoanStageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanStageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanStage model
   */
  readonly fields: LoanStageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanStage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanStageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loanRequests<T extends LoanStage$loanRequestsArgs<ExtArgs> = {}>(args?: Subset<T, LoanStage$loanRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historyEntries<T extends LoanStage$historyEntriesArgs<ExtArgs> = {}>(args?: Subset<T, LoanStage$historyEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stageConfigs<T extends LoanStage$stageConfigsArgs<ExtArgs> = {}>(args?: Subset<T, LoanStage$stageConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanStage model
   */
  interface LoanStageFieldRefs {
    readonly id: FieldRef<"LoanStage", 'String'>
    readonly name: FieldRef<"LoanStage", 'String'>
    readonly description: FieldRef<"LoanStage", 'String'>
    readonly order: FieldRef<"LoanStage", 'Int'>
    readonly createdAt: FieldRef<"LoanStage", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanStage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanStage findUnique
   */
  export type LoanStageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * Filter, which LoanStage to fetch.
     */
    where: LoanStageWhereUniqueInput
  }

  /**
   * LoanStage findUniqueOrThrow
   */
  export type LoanStageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * Filter, which LoanStage to fetch.
     */
    where: LoanStageWhereUniqueInput
  }

  /**
   * LoanStage findFirst
   */
  export type LoanStageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * Filter, which LoanStage to fetch.
     */
    where?: LoanStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStages to fetch.
     */
    orderBy?: LoanStageOrderByWithRelationInput | LoanStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanStages.
     */
    cursor?: LoanStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanStages.
     */
    distinct?: LoanStageScalarFieldEnum | LoanStageScalarFieldEnum[]
  }

  /**
   * LoanStage findFirstOrThrow
   */
  export type LoanStageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * Filter, which LoanStage to fetch.
     */
    where?: LoanStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStages to fetch.
     */
    orderBy?: LoanStageOrderByWithRelationInput | LoanStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanStages.
     */
    cursor?: LoanStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanStages.
     */
    distinct?: LoanStageScalarFieldEnum | LoanStageScalarFieldEnum[]
  }

  /**
   * LoanStage findMany
   */
  export type LoanStageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * Filter, which LoanStages to fetch.
     */
    where?: LoanStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanStages to fetch.
     */
    orderBy?: LoanStageOrderByWithRelationInput | LoanStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanStages.
     */
    cursor?: LoanStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanStages.
     */
    skip?: number
    distinct?: LoanStageScalarFieldEnum | LoanStageScalarFieldEnum[]
  }

  /**
   * LoanStage create
   */
  export type LoanStageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanStage.
     */
    data: XOR<LoanStageCreateInput, LoanStageUncheckedCreateInput>
  }

  /**
   * LoanStage createMany
   */
  export type LoanStageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanStages.
     */
    data: LoanStageCreateManyInput | LoanStageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanStage createManyAndReturn
   */
  export type LoanStageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * The data used to create many LoanStages.
     */
    data: LoanStageCreateManyInput | LoanStageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanStage update
   */
  export type LoanStageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanStage.
     */
    data: XOR<LoanStageUpdateInput, LoanStageUncheckedUpdateInput>
    /**
     * Choose, which LoanStage to update.
     */
    where: LoanStageWhereUniqueInput
  }

  /**
   * LoanStage updateMany
   */
  export type LoanStageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanStages.
     */
    data: XOR<LoanStageUpdateManyMutationInput, LoanStageUncheckedUpdateManyInput>
    /**
     * Filter which LoanStages to update
     */
    where?: LoanStageWhereInput
    /**
     * Limit how many LoanStages to update.
     */
    limit?: number
  }

  /**
   * LoanStage updateManyAndReturn
   */
  export type LoanStageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * The data used to update LoanStages.
     */
    data: XOR<LoanStageUpdateManyMutationInput, LoanStageUncheckedUpdateManyInput>
    /**
     * Filter which LoanStages to update
     */
    where?: LoanStageWhereInput
    /**
     * Limit how many LoanStages to update.
     */
    limit?: number
  }

  /**
   * LoanStage upsert
   */
  export type LoanStageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanStage to update in case it exists.
     */
    where: LoanStageWhereUniqueInput
    /**
     * In case the LoanStage found by the `where` argument doesn't exist, create a new LoanStage with this data.
     */
    create: XOR<LoanStageCreateInput, LoanStageUncheckedCreateInput>
    /**
     * In case the LoanStage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanStageUpdateInput, LoanStageUncheckedUpdateInput>
  }

  /**
   * LoanStage delete
   */
  export type LoanStageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    /**
     * Filter which LoanStage to delete.
     */
    where: LoanStageWhereUniqueInput
  }

  /**
   * LoanStage deleteMany
   */
  export type LoanStageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanStages to delete
     */
    where?: LoanStageWhereInput
    /**
     * Limit how many LoanStages to delete.
     */
    limit?: number
  }

  /**
   * LoanStage.loanRequests
   */
  export type LoanStage$loanRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    where?: LoanRequestWhereInput
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    cursor?: LoanRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanStage.historyEntries
   */
  export type LoanStage$historyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    where?: LoanHistoryEntryWhereInput
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    cursor?: LoanHistoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanHistoryEntryScalarFieldEnum | LoanHistoryEntryScalarFieldEnum[]
  }

  /**
   * LoanStage.stageConfigs
   */
  export type LoanStage$stageConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    where?: StageConfigWhereInput
    orderBy?: StageConfigOrderByWithRelationInput | StageConfigOrderByWithRelationInput[]
    cursor?: StageConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageConfigScalarFieldEnum | StageConfigScalarFieldEnum[]
  }

  /**
   * LoanStage without action
   */
  export type LoanStageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    roleId: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    roleId: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    roleId: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleId?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    roleId: string | null
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    assignedLoans?: boolean | User$assignedLoansArgs<ExtArgs>
    historyEntries?: boolean | User$historyEntriesArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    roleId?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "roleId" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    assignedLoans?: boolean | User$assignedLoansArgs<ExtArgs>
    historyEntries?: boolean | User$historyEntriesArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs> | null
      assignedLoans: Prisma.$LoanRequestPayload<ExtArgs>[]
      historyEntries: Prisma.$LoanHistoryEntryPayload<ExtArgs>[]
      manager: Prisma.$UserPayload<ExtArgs> | null
      subordinates: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      roleId: string | null
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedLoans<T extends User$assignedLoansArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedLoansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historyEntries<T extends User$historyEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$historyEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subordinates<T extends User$subordinatesArgs<ExtArgs> = {}>(args?: Subset<T, User$subordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly managerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.assignedLoans
   */
  export type User$assignedLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    where?: LoanRequestWhereInput
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    cursor?: LoanRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * User.historyEntries
   */
  export type User$historyEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    where?: LoanHistoryEntryWhereInput
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    cursor?: LoanHistoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanHistoryEntryScalarFieldEnum | LoanHistoryEntryScalarFieldEnum[]
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.subordinates
   */
  export type User$subordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LoanRequest
   */

  export type AggregateLoanRequest = {
    _count: LoanRequestCountAggregateOutputType | null
    _avg: LoanRequestAvgAggregateOutputType | null
    _sum: LoanRequestSumAggregateOutputType | null
    _min: LoanRequestMinAggregateOutputType | null
    _max: LoanRequestMaxAggregateOutputType | null
  }

  export type LoanRequestAvgAggregateOutputType = {
    loanAmount: Decimal | null
  }

  export type LoanRequestSumAggregateOutputType = {
    loanAmount: Decimal | null
  }

  export type LoanRequestMinAggregateOutputType = {
    id: string | null
    loanNumber: string | null
    customerNumber: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    loanAmount: Decimal | null
    loanType: string | null
    loanPurpose: string | null
    currentStageId: string | null
    submittedDate: Date | null
    lastUpdatedDate: Date | null
    assignedToId: string | null
    stageDeadline: Date | null
    isOverdue: boolean | null
    isReadyForManagerReview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanRequestMaxAggregateOutputType = {
    id: string | null
    loanNumber: string | null
    customerNumber: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    loanAmount: Decimal | null
    loanType: string | null
    loanPurpose: string | null
    currentStageId: string | null
    submittedDate: Date | null
    lastUpdatedDate: Date | null
    assignedToId: string | null
    stageDeadline: Date | null
    isOverdue: boolean | null
    isReadyForManagerReview: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanRequestCountAggregateOutputType = {
    id: number
    loanNumber: number
    customerNumber: number
    customerName: number
    customerEmail: number
    customerPhone: number
    loanAmount: number
    loanType: number
    loanPurpose: number
    currentStageId: number
    submittedDate: number
    lastUpdatedDate: number
    assignedToId: number
    stageDeadline: number
    isOverdue: number
    isReadyForManagerReview: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanRequestAvgAggregateInputType = {
    loanAmount?: true
  }

  export type LoanRequestSumAggregateInputType = {
    loanAmount?: true
  }

  export type LoanRequestMinAggregateInputType = {
    id?: true
    loanNumber?: true
    customerNumber?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    loanAmount?: true
    loanType?: true
    loanPurpose?: true
    currentStageId?: true
    submittedDate?: true
    lastUpdatedDate?: true
    assignedToId?: true
    stageDeadline?: true
    isOverdue?: true
    isReadyForManagerReview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanRequestMaxAggregateInputType = {
    id?: true
    loanNumber?: true
    customerNumber?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    loanAmount?: true
    loanType?: true
    loanPurpose?: true
    currentStageId?: true
    submittedDate?: true
    lastUpdatedDate?: true
    assignedToId?: true
    stageDeadline?: true
    isOverdue?: true
    isReadyForManagerReview?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanRequestCountAggregateInputType = {
    id?: true
    loanNumber?: true
    customerNumber?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    loanAmount?: true
    loanType?: true
    loanPurpose?: true
    currentStageId?: true
    submittedDate?: true
    lastUpdatedDate?: true
    assignedToId?: true
    stageDeadline?: true
    isOverdue?: true
    isReadyForManagerReview?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanRequest to aggregate.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanRequests
    **/
    _count?: true | LoanRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanRequestMaxAggregateInputType
  }

  export type GetLoanRequestAggregateType<T extends LoanRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanRequest[P]>
      : GetScalarType<T[P], AggregateLoanRequest[P]>
  }




  export type LoanRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanRequestWhereInput
    orderBy?: LoanRequestOrderByWithAggregationInput | LoanRequestOrderByWithAggregationInput[]
    by: LoanRequestScalarFieldEnum[] | LoanRequestScalarFieldEnum
    having?: LoanRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanRequestCountAggregateInputType | true
    _avg?: LoanRequestAvgAggregateInputType
    _sum?: LoanRequestSumAggregateInputType
    _min?: LoanRequestMinAggregateInputType
    _max?: LoanRequestMaxAggregateInputType
  }

  export type LoanRequestGroupByOutputType = {
    id: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal
    loanType: string
    loanPurpose: string
    currentStageId: string | null
    submittedDate: Date
    lastUpdatedDate: Date
    assignedToId: string | null
    stageDeadline: Date | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt: Date
    updatedAt: Date
    _count: LoanRequestCountAggregateOutputType | null
    _avg: LoanRequestAvgAggregateOutputType | null
    _sum: LoanRequestSumAggregateOutputType | null
    _min: LoanRequestMinAggregateOutputType | null
    _max: LoanRequestMaxAggregateOutputType | null
  }

  type GetLoanRequestGroupByPayload<T extends LoanRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LoanRequestGroupByOutputType[P]>
        }
      >
    >


  export type LoanRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanNumber?: boolean
    customerNumber?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    loanAmount?: boolean
    loanType?: boolean
    loanPurpose?: boolean
    currentStageId?: boolean
    submittedDate?: boolean
    lastUpdatedDate?: boolean
    assignedToId?: boolean
    stageDeadline?: boolean
    isOverdue?: boolean
    isReadyForManagerReview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentStage?: boolean | LoanRequest$currentStageArgs<ExtArgs>
    assignedTo?: boolean | LoanRequest$assignedToArgs<ExtArgs>
    documents?: boolean | LoanRequest$documentsArgs<ExtArgs>
    history?: boolean | LoanRequest$historyArgs<ExtArgs>
    _count?: boolean | LoanRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanRequest"]>

  export type LoanRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanNumber?: boolean
    customerNumber?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    loanAmount?: boolean
    loanType?: boolean
    loanPurpose?: boolean
    currentStageId?: boolean
    submittedDate?: boolean
    lastUpdatedDate?: boolean
    assignedToId?: boolean
    stageDeadline?: boolean
    isOverdue?: boolean
    isReadyForManagerReview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentStage?: boolean | LoanRequest$currentStageArgs<ExtArgs>
    assignedTo?: boolean | LoanRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["loanRequest"]>

  export type LoanRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanNumber?: boolean
    customerNumber?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    loanAmount?: boolean
    loanType?: boolean
    loanPurpose?: boolean
    currentStageId?: boolean
    submittedDate?: boolean
    lastUpdatedDate?: boolean
    assignedToId?: boolean
    stageDeadline?: boolean
    isOverdue?: boolean
    isReadyForManagerReview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currentStage?: boolean | LoanRequest$currentStageArgs<ExtArgs>
    assignedTo?: boolean | LoanRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["loanRequest"]>

  export type LoanRequestSelectScalar = {
    id?: boolean
    loanNumber?: boolean
    customerNumber?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    loanAmount?: boolean
    loanType?: boolean
    loanPurpose?: boolean
    currentStageId?: boolean
    submittedDate?: boolean
    lastUpdatedDate?: boolean
    assignedToId?: boolean
    stageDeadline?: boolean
    isOverdue?: boolean
    isReadyForManagerReview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loanNumber" | "customerNumber" | "customerName" | "customerEmail" | "customerPhone" | "loanAmount" | "loanType" | "loanPurpose" | "currentStageId" | "submittedDate" | "lastUpdatedDate" | "assignedToId" | "stageDeadline" | "isOverdue" | "isReadyForManagerReview" | "createdAt" | "updatedAt", ExtArgs["result"]["loanRequest"]>
  export type LoanRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentStage?: boolean | LoanRequest$currentStageArgs<ExtArgs>
    assignedTo?: boolean | LoanRequest$assignedToArgs<ExtArgs>
    documents?: boolean | LoanRequest$documentsArgs<ExtArgs>
    history?: boolean | LoanRequest$historyArgs<ExtArgs>
    _count?: boolean | LoanRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoanRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentStage?: boolean | LoanRequest$currentStageArgs<ExtArgs>
    assignedTo?: boolean | LoanRequest$assignedToArgs<ExtArgs>
  }
  export type LoanRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentStage?: boolean | LoanRequest$currentStageArgs<ExtArgs>
    assignedTo?: boolean | LoanRequest$assignedToArgs<ExtArgs>
  }

  export type $LoanRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanRequest"
    objects: {
      currentStage: Prisma.$LoanStagePayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      documents: Prisma.$LoanDocumentPayload<ExtArgs>[]
      history: Prisma.$LoanHistoryEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanNumber: string
      customerNumber: string
      customerName: string
      customerEmail: string
      customerPhone: string
      loanAmount: Prisma.Decimal
      loanType: string
      loanPurpose: string
      currentStageId: string | null
      submittedDate: Date
      lastUpdatedDate: Date
      assignedToId: string | null
      stageDeadline: Date | null
      isOverdue: boolean
      isReadyForManagerReview: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loanRequest"]>
    composites: {}
  }

  type LoanRequestGetPayload<S extends boolean | null | undefined | LoanRequestDefaultArgs> = $Result.GetResult<Prisma.$LoanRequestPayload, S>

  type LoanRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanRequestCountAggregateInputType | true
    }

  export interface LoanRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanRequest'], meta: { name: 'LoanRequest' } }
    /**
     * Find zero or one LoanRequest that matches the filter.
     * @param {LoanRequestFindUniqueArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanRequestFindUniqueArgs>(args: SelectSubset<T, LoanRequestFindUniqueArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanRequestFindUniqueOrThrowArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestFindFirstArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanRequestFindFirstArgs>(args?: SelectSubset<T, LoanRequestFindFirstArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestFindFirstOrThrowArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanRequests
     * const loanRequests = await prisma.loanRequest.findMany()
     * 
     * // Get first 10 LoanRequests
     * const loanRequests = await prisma.loanRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanRequestWithIdOnly = await prisma.loanRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanRequestFindManyArgs>(args?: SelectSubset<T, LoanRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanRequest.
     * @param {LoanRequestCreateArgs} args - Arguments to create a LoanRequest.
     * @example
     * // Create one LoanRequest
     * const LoanRequest = await prisma.loanRequest.create({
     *   data: {
     *     // ... data to create a LoanRequest
     *   }
     * })
     * 
     */
    create<T extends LoanRequestCreateArgs>(args: SelectSubset<T, LoanRequestCreateArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanRequests.
     * @param {LoanRequestCreateManyArgs} args - Arguments to create many LoanRequests.
     * @example
     * // Create many LoanRequests
     * const loanRequest = await prisma.loanRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanRequestCreateManyArgs>(args?: SelectSubset<T, LoanRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanRequests and returns the data saved in the database.
     * @param {LoanRequestCreateManyAndReturnArgs} args - Arguments to create many LoanRequests.
     * @example
     * // Create many LoanRequests
     * const loanRequest = await prisma.loanRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanRequests and only return the `id`
     * const loanRequestWithIdOnly = await prisma.loanRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanRequest.
     * @param {LoanRequestDeleteArgs} args - Arguments to delete one LoanRequest.
     * @example
     * // Delete one LoanRequest
     * const LoanRequest = await prisma.loanRequest.delete({
     *   where: {
     *     // ... filter to delete one LoanRequest
     *   }
     * })
     * 
     */
    delete<T extends LoanRequestDeleteArgs>(args: SelectSubset<T, LoanRequestDeleteArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanRequest.
     * @param {LoanRequestUpdateArgs} args - Arguments to update one LoanRequest.
     * @example
     * // Update one LoanRequest
     * const loanRequest = await prisma.loanRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanRequestUpdateArgs>(args: SelectSubset<T, LoanRequestUpdateArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanRequests.
     * @param {LoanRequestDeleteManyArgs} args - Arguments to filter LoanRequests to delete.
     * @example
     * // Delete a few LoanRequests
     * const { count } = await prisma.loanRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanRequestDeleteManyArgs>(args?: SelectSubset<T, LoanRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanRequests
     * const loanRequest = await prisma.loanRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanRequestUpdateManyArgs>(args: SelectSubset<T, LoanRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanRequests and returns the data updated in the database.
     * @param {LoanRequestUpdateManyAndReturnArgs} args - Arguments to update many LoanRequests.
     * @example
     * // Update many LoanRequests
     * const loanRequest = await prisma.loanRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanRequests and only return the `id`
     * const loanRequestWithIdOnly = await prisma.loanRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanRequest.
     * @param {LoanRequestUpsertArgs} args - Arguments to update or create a LoanRequest.
     * @example
     * // Update or create a LoanRequest
     * const loanRequest = await prisma.loanRequest.upsert({
     *   create: {
     *     // ... data to create a LoanRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanRequest we want to update
     *   }
     * })
     */
    upsert<T extends LoanRequestUpsertArgs>(args: SelectSubset<T, LoanRequestUpsertArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestCountArgs} args - Arguments to filter LoanRequests to count.
     * @example
     * // Count the number of LoanRequests
     * const count = await prisma.loanRequest.count({
     *   where: {
     *     // ... the filter for the LoanRequests we want to count
     *   }
     * })
    **/
    count<T extends LoanRequestCountArgs>(
      args?: Subset<T, LoanRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanRequestAggregateArgs>(args: Subset<T, LoanRequestAggregateArgs>): Prisma.PrismaPromise<GetLoanRequestAggregateType<T>>

    /**
     * Group by LoanRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanRequestGroupByArgs['orderBy'] }
        : { orderBy?: LoanRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanRequest model
   */
  readonly fields: LoanRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currentStage<T extends LoanRequest$currentStageArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequest$currentStageArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends LoanRequest$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequest$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends LoanRequest$documentsArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequest$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends LoanRequest$historyArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequest$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanRequest model
   */
  interface LoanRequestFieldRefs {
    readonly id: FieldRef<"LoanRequest", 'String'>
    readonly loanNumber: FieldRef<"LoanRequest", 'String'>
    readonly customerNumber: FieldRef<"LoanRequest", 'String'>
    readonly customerName: FieldRef<"LoanRequest", 'String'>
    readonly customerEmail: FieldRef<"LoanRequest", 'String'>
    readonly customerPhone: FieldRef<"LoanRequest", 'String'>
    readonly loanAmount: FieldRef<"LoanRequest", 'Decimal'>
    readonly loanType: FieldRef<"LoanRequest", 'String'>
    readonly loanPurpose: FieldRef<"LoanRequest", 'String'>
    readonly currentStageId: FieldRef<"LoanRequest", 'String'>
    readonly submittedDate: FieldRef<"LoanRequest", 'DateTime'>
    readonly lastUpdatedDate: FieldRef<"LoanRequest", 'DateTime'>
    readonly assignedToId: FieldRef<"LoanRequest", 'String'>
    readonly stageDeadline: FieldRef<"LoanRequest", 'DateTime'>
    readonly isOverdue: FieldRef<"LoanRequest", 'Boolean'>
    readonly isReadyForManagerReview: FieldRef<"LoanRequest", 'Boolean'>
    readonly createdAt: FieldRef<"LoanRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanRequest findUnique
   */
  export type LoanRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest findUniqueOrThrow
   */
  export type LoanRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest findFirst
   */
  export type LoanRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanRequests.
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanRequests.
     */
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanRequest findFirstOrThrow
   */
  export type LoanRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanRequests.
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanRequests.
     */
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanRequest findMany
   */
  export type LoanRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequests to fetch.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanRequests.
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanRequest create
   */
  export type LoanRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanRequest.
     */
    data: XOR<LoanRequestCreateInput, LoanRequestUncheckedCreateInput>
  }

  /**
   * LoanRequest createMany
   */
  export type LoanRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanRequests.
     */
    data: LoanRequestCreateManyInput | LoanRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanRequest createManyAndReturn
   */
  export type LoanRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LoanRequests.
     */
    data: LoanRequestCreateManyInput | LoanRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanRequest update
   */
  export type LoanRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanRequest.
     */
    data: XOR<LoanRequestUpdateInput, LoanRequestUncheckedUpdateInput>
    /**
     * Choose, which LoanRequest to update.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest updateMany
   */
  export type LoanRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanRequests.
     */
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyInput>
    /**
     * Filter which LoanRequests to update
     */
    where?: LoanRequestWhereInput
    /**
     * Limit how many LoanRequests to update.
     */
    limit?: number
  }

  /**
   * LoanRequest updateManyAndReturn
   */
  export type LoanRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * The data used to update LoanRequests.
     */
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyInput>
    /**
     * Filter which LoanRequests to update
     */
    where?: LoanRequestWhereInput
    /**
     * Limit how many LoanRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanRequest upsert
   */
  export type LoanRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanRequest to update in case it exists.
     */
    where: LoanRequestWhereUniqueInput
    /**
     * In case the LoanRequest found by the `where` argument doesn't exist, create a new LoanRequest with this data.
     */
    create: XOR<LoanRequestCreateInput, LoanRequestUncheckedCreateInput>
    /**
     * In case the LoanRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanRequestUpdateInput, LoanRequestUncheckedUpdateInput>
  }

  /**
   * LoanRequest delete
   */
  export type LoanRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter which LoanRequest to delete.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest deleteMany
   */
  export type LoanRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanRequests to delete
     */
    where?: LoanRequestWhereInput
    /**
     * Limit how many LoanRequests to delete.
     */
    limit?: number
  }

  /**
   * LoanRequest.currentStage
   */
  export type LoanRequest$currentStageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    where?: LoanStageWhereInput
  }

  /**
   * LoanRequest.assignedTo
   */
  export type LoanRequest$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LoanRequest.documents
   */
  export type LoanRequest$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    where?: LoanDocumentWhereInput
    orderBy?: LoanDocumentOrderByWithRelationInput | LoanDocumentOrderByWithRelationInput[]
    cursor?: LoanDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanDocumentScalarFieldEnum | LoanDocumentScalarFieldEnum[]
  }

  /**
   * LoanRequest.history
   */
  export type LoanRequest$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    where?: LoanHistoryEntryWhereInput
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    cursor?: LoanHistoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanHistoryEntryScalarFieldEnum | LoanHistoryEntryScalarFieldEnum[]
  }

  /**
   * LoanRequest without action
   */
  export type LoanRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
  }


  /**
   * Model LoanDocument
   */

  export type AggregateLoanDocument = {
    _count: LoanDocumentCountAggregateOutputType | null
    _min: LoanDocumentMinAggregateOutputType | null
    _max: LoanDocumentMaxAggregateOutputType | null
  }

  export type LoanDocumentMinAggregateOutputType = {
    id: string | null
    loanRequestId: string | null
    name: string | null
    status: string | null
    notes: string | null
    uploadedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanDocumentMaxAggregateOutputType = {
    id: string | null
    loanRequestId: string | null
    name: string | null
    status: string | null
    notes: string | null
    uploadedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanDocumentCountAggregateOutputType = {
    id: number
    loanRequestId: number
    name: number
    status: number
    notes: number
    uploadedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanDocumentMinAggregateInputType = {
    id?: true
    loanRequestId?: true
    name?: true
    status?: true
    notes?: true
    uploadedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanDocumentMaxAggregateInputType = {
    id?: true
    loanRequestId?: true
    name?: true
    status?: true
    notes?: true
    uploadedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanDocumentCountAggregateInputType = {
    id?: true
    loanRequestId?: true
    name?: true
    status?: true
    notes?: true
    uploadedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanDocument to aggregate.
     */
    where?: LoanDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanDocuments to fetch.
     */
    orderBy?: LoanDocumentOrderByWithRelationInput | LoanDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanDocuments
    **/
    _count?: true | LoanDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanDocumentMaxAggregateInputType
  }

  export type GetLoanDocumentAggregateType<T extends LoanDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanDocument[P]>
      : GetScalarType<T[P], AggregateLoanDocument[P]>
  }




  export type LoanDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanDocumentWhereInput
    orderBy?: LoanDocumentOrderByWithAggregationInput | LoanDocumentOrderByWithAggregationInput[]
    by: LoanDocumentScalarFieldEnum[] | LoanDocumentScalarFieldEnum
    having?: LoanDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanDocumentCountAggregateInputType | true
    _min?: LoanDocumentMinAggregateInputType
    _max?: LoanDocumentMaxAggregateInputType
  }

  export type LoanDocumentGroupByOutputType = {
    id: string
    loanRequestId: string
    name: string
    status: string
    notes: string | null
    uploadedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: LoanDocumentCountAggregateOutputType | null
    _min: LoanDocumentMinAggregateOutputType | null
    _max: LoanDocumentMaxAggregateOutputType | null
  }

  type GetLoanDocumentGroupByPayload<T extends LoanDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], LoanDocumentGroupByOutputType[P]>
        }
      >
    >


  export type LoanDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanRequestId?: boolean
    name?: boolean
    status?: boolean
    notes?: boolean
    uploadedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanDocument"]>

  export type LoanDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanRequestId?: boolean
    name?: boolean
    status?: boolean
    notes?: boolean
    uploadedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanDocument"]>

  export type LoanDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanRequestId?: boolean
    name?: boolean
    status?: boolean
    notes?: boolean
    uploadedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanDocument"]>

  export type LoanDocumentSelectScalar = {
    id?: boolean
    loanRequestId?: boolean
    name?: boolean
    status?: boolean
    notes?: boolean
    uploadedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loanRequestId" | "name" | "status" | "notes" | "uploadedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["loanDocument"]>
  export type LoanDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }
  export type LoanDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }
  export type LoanDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }

  export type $LoanDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanDocument"
    objects: {
      loanRequest: Prisma.$LoanRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanRequestId: string
      name: string
      status: string
      notes: string | null
      uploadedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loanDocument"]>
    composites: {}
  }

  type LoanDocumentGetPayload<S extends boolean | null | undefined | LoanDocumentDefaultArgs> = $Result.GetResult<Prisma.$LoanDocumentPayload, S>

  type LoanDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanDocumentCountAggregateInputType | true
    }

  export interface LoanDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanDocument'], meta: { name: 'LoanDocument' } }
    /**
     * Find zero or one LoanDocument that matches the filter.
     * @param {LoanDocumentFindUniqueArgs} args - Arguments to find a LoanDocument
     * @example
     * // Get one LoanDocument
     * const loanDocument = await prisma.loanDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanDocumentFindUniqueArgs>(args: SelectSubset<T, LoanDocumentFindUniqueArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanDocumentFindUniqueOrThrowArgs} args - Arguments to find a LoanDocument
     * @example
     * // Get one LoanDocument
     * const loanDocument = await prisma.loanDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentFindFirstArgs} args - Arguments to find a LoanDocument
     * @example
     * // Get one LoanDocument
     * const loanDocument = await prisma.loanDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanDocumentFindFirstArgs>(args?: SelectSubset<T, LoanDocumentFindFirstArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentFindFirstOrThrowArgs} args - Arguments to find a LoanDocument
     * @example
     * // Get one LoanDocument
     * const loanDocument = await prisma.loanDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanDocuments
     * const loanDocuments = await prisma.loanDocument.findMany()
     * 
     * // Get first 10 LoanDocuments
     * const loanDocuments = await prisma.loanDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanDocumentWithIdOnly = await prisma.loanDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanDocumentFindManyArgs>(args?: SelectSubset<T, LoanDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanDocument.
     * @param {LoanDocumentCreateArgs} args - Arguments to create a LoanDocument.
     * @example
     * // Create one LoanDocument
     * const LoanDocument = await prisma.loanDocument.create({
     *   data: {
     *     // ... data to create a LoanDocument
     *   }
     * })
     * 
     */
    create<T extends LoanDocumentCreateArgs>(args: SelectSubset<T, LoanDocumentCreateArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanDocuments.
     * @param {LoanDocumentCreateManyArgs} args - Arguments to create many LoanDocuments.
     * @example
     * // Create many LoanDocuments
     * const loanDocument = await prisma.loanDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanDocumentCreateManyArgs>(args?: SelectSubset<T, LoanDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanDocuments and returns the data saved in the database.
     * @param {LoanDocumentCreateManyAndReturnArgs} args - Arguments to create many LoanDocuments.
     * @example
     * // Create many LoanDocuments
     * const loanDocument = await prisma.loanDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanDocuments and only return the `id`
     * const loanDocumentWithIdOnly = await prisma.loanDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanDocument.
     * @param {LoanDocumentDeleteArgs} args - Arguments to delete one LoanDocument.
     * @example
     * // Delete one LoanDocument
     * const LoanDocument = await prisma.loanDocument.delete({
     *   where: {
     *     // ... filter to delete one LoanDocument
     *   }
     * })
     * 
     */
    delete<T extends LoanDocumentDeleteArgs>(args: SelectSubset<T, LoanDocumentDeleteArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanDocument.
     * @param {LoanDocumentUpdateArgs} args - Arguments to update one LoanDocument.
     * @example
     * // Update one LoanDocument
     * const loanDocument = await prisma.loanDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanDocumentUpdateArgs>(args: SelectSubset<T, LoanDocumentUpdateArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanDocuments.
     * @param {LoanDocumentDeleteManyArgs} args - Arguments to filter LoanDocuments to delete.
     * @example
     * // Delete a few LoanDocuments
     * const { count } = await prisma.loanDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDocumentDeleteManyArgs>(args?: SelectSubset<T, LoanDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanDocuments
     * const loanDocument = await prisma.loanDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanDocumentUpdateManyArgs>(args: SelectSubset<T, LoanDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanDocuments and returns the data updated in the database.
     * @param {LoanDocumentUpdateManyAndReturnArgs} args - Arguments to update many LoanDocuments.
     * @example
     * // Update many LoanDocuments
     * const loanDocument = await prisma.loanDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanDocuments and only return the `id`
     * const loanDocumentWithIdOnly = await prisma.loanDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanDocument.
     * @param {LoanDocumentUpsertArgs} args - Arguments to update or create a LoanDocument.
     * @example
     * // Update or create a LoanDocument
     * const loanDocument = await prisma.loanDocument.upsert({
     *   create: {
     *     // ... data to create a LoanDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanDocument we want to update
     *   }
     * })
     */
    upsert<T extends LoanDocumentUpsertArgs>(args: SelectSubset<T, LoanDocumentUpsertArgs<ExtArgs>>): Prisma__LoanDocumentClient<$Result.GetResult<Prisma.$LoanDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentCountArgs} args - Arguments to filter LoanDocuments to count.
     * @example
     * // Count the number of LoanDocuments
     * const count = await prisma.loanDocument.count({
     *   where: {
     *     // ... the filter for the LoanDocuments we want to count
     *   }
     * })
    **/
    count<T extends LoanDocumentCountArgs>(
      args?: Subset<T, LoanDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanDocumentAggregateArgs>(args: Subset<T, LoanDocumentAggregateArgs>): Prisma.PrismaPromise<GetLoanDocumentAggregateType<T>>

    /**
     * Group by LoanDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanDocumentGroupByArgs['orderBy'] }
        : { orderBy?: LoanDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanDocument model
   */
  readonly fields: LoanDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loanRequest<T extends LoanRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequestDefaultArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanDocument model
   */
  interface LoanDocumentFieldRefs {
    readonly id: FieldRef<"LoanDocument", 'String'>
    readonly loanRequestId: FieldRef<"LoanDocument", 'String'>
    readonly name: FieldRef<"LoanDocument", 'String'>
    readonly status: FieldRef<"LoanDocument", 'String'>
    readonly notes: FieldRef<"LoanDocument", 'String'>
    readonly uploadedAt: FieldRef<"LoanDocument", 'DateTime'>
    readonly createdAt: FieldRef<"LoanDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanDocument findUnique
   */
  export type LoanDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LoanDocument to fetch.
     */
    where: LoanDocumentWhereUniqueInput
  }

  /**
   * LoanDocument findUniqueOrThrow
   */
  export type LoanDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LoanDocument to fetch.
     */
    where: LoanDocumentWhereUniqueInput
  }

  /**
   * LoanDocument findFirst
   */
  export type LoanDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LoanDocument to fetch.
     */
    where?: LoanDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanDocuments to fetch.
     */
    orderBy?: LoanDocumentOrderByWithRelationInput | LoanDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanDocuments.
     */
    cursor?: LoanDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanDocuments.
     */
    distinct?: LoanDocumentScalarFieldEnum | LoanDocumentScalarFieldEnum[]
  }

  /**
   * LoanDocument findFirstOrThrow
   */
  export type LoanDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LoanDocument to fetch.
     */
    where?: LoanDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanDocuments to fetch.
     */
    orderBy?: LoanDocumentOrderByWithRelationInput | LoanDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanDocuments.
     */
    cursor?: LoanDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanDocuments.
     */
    distinct?: LoanDocumentScalarFieldEnum | LoanDocumentScalarFieldEnum[]
  }

  /**
   * LoanDocument findMany
   */
  export type LoanDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LoanDocuments to fetch.
     */
    where?: LoanDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanDocuments to fetch.
     */
    orderBy?: LoanDocumentOrderByWithRelationInput | LoanDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanDocuments.
     */
    cursor?: LoanDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanDocuments.
     */
    skip?: number
    distinct?: LoanDocumentScalarFieldEnum | LoanDocumentScalarFieldEnum[]
  }

  /**
   * LoanDocument create
   */
  export type LoanDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanDocument.
     */
    data: XOR<LoanDocumentCreateInput, LoanDocumentUncheckedCreateInput>
  }

  /**
   * LoanDocument createMany
   */
  export type LoanDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanDocuments.
     */
    data: LoanDocumentCreateManyInput | LoanDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanDocument createManyAndReturn
   */
  export type LoanDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many LoanDocuments.
     */
    data: LoanDocumentCreateManyInput | LoanDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanDocument update
   */
  export type LoanDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanDocument.
     */
    data: XOR<LoanDocumentUpdateInput, LoanDocumentUncheckedUpdateInput>
    /**
     * Choose, which LoanDocument to update.
     */
    where: LoanDocumentWhereUniqueInput
  }

  /**
   * LoanDocument updateMany
   */
  export type LoanDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanDocuments.
     */
    data: XOR<LoanDocumentUpdateManyMutationInput, LoanDocumentUncheckedUpdateManyInput>
    /**
     * Filter which LoanDocuments to update
     */
    where?: LoanDocumentWhereInput
    /**
     * Limit how many LoanDocuments to update.
     */
    limit?: number
  }

  /**
   * LoanDocument updateManyAndReturn
   */
  export type LoanDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * The data used to update LoanDocuments.
     */
    data: XOR<LoanDocumentUpdateManyMutationInput, LoanDocumentUncheckedUpdateManyInput>
    /**
     * Filter which LoanDocuments to update
     */
    where?: LoanDocumentWhereInput
    /**
     * Limit how many LoanDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanDocument upsert
   */
  export type LoanDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanDocument to update in case it exists.
     */
    where: LoanDocumentWhereUniqueInput
    /**
     * In case the LoanDocument found by the `where` argument doesn't exist, create a new LoanDocument with this data.
     */
    create: XOR<LoanDocumentCreateInput, LoanDocumentUncheckedCreateInput>
    /**
     * In case the LoanDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanDocumentUpdateInput, LoanDocumentUncheckedUpdateInput>
  }

  /**
   * LoanDocument delete
   */
  export type LoanDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
    /**
     * Filter which LoanDocument to delete.
     */
    where: LoanDocumentWhereUniqueInput
  }

  /**
   * LoanDocument deleteMany
   */
  export type LoanDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanDocuments to delete
     */
    where?: LoanDocumentWhereInput
    /**
     * Limit how many LoanDocuments to delete.
     */
    limit?: number
  }

  /**
   * LoanDocument without action
   */
  export type LoanDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanDocument
     */
    select?: LoanDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanDocument
     */
    omit?: LoanDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanDocumentInclude<ExtArgs> | null
  }


  /**
   * Model LoanHistoryEntry
   */

  export type AggregateLoanHistoryEntry = {
    _count: LoanHistoryEntryCountAggregateOutputType | null
    _min: LoanHistoryEntryMinAggregateOutputType | null
    _max: LoanHistoryEntryMaxAggregateOutputType | null
  }

  export type LoanHistoryEntryMinAggregateOutputType = {
    id: string | null
    loanRequestId: string | null
    stageId: string | null
    timestamp: Date | null
    userId: string | null
    userName: string | null
    notes: string | null
    requiredFulfilment: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type LoanHistoryEntryMaxAggregateOutputType = {
    id: string | null
    loanRequestId: string | null
    stageId: string | null
    timestamp: Date | null
    userId: string | null
    userName: string | null
    notes: string | null
    requiredFulfilment: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type LoanHistoryEntryCountAggregateOutputType = {
    id: number
    loanRequestId: number
    stageId: number
    timestamp: number
    userId: number
    userName: number
    notes: number
    requiredFulfilment: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type LoanHistoryEntryMinAggregateInputType = {
    id?: true
    loanRequestId?: true
    stageId?: true
    timestamp?: true
    userId?: true
    userName?: true
    notes?: true
    requiredFulfilment?: true
    ipAddress?: true
    createdAt?: true
  }

  export type LoanHistoryEntryMaxAggregateInputType = {
    id?: true
    loanRequestId?: true
    stageId?: true
    timestamp?: true
    userId?: true
    userName?: true
    notes?: true
    requiredFulfilment?: true
    ipAddress?: true
    createdAt?: true
  }

  export type LoanHistoryEntryCountAggregateInputType = {
    id?: true
    loanRequestId?: true
    stageId?: true
    timestamp?: true
    userId?: true
    userName?: true
    notes?: true
    requiredFulfilment?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type LoanHistoryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanHistoryEntry to aggregate.
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanHistoryEntries to fetch.
     */
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanHistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanHistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanHistoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanHistoryEntries
    **/
    _count?: true | LoanHistoryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanHistoryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanHistoryEntryMaxAggregateInputType
  }

  export type GetLoanHistoryEntryAggregateType<T extends LoanHistoryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanHistoryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanHistoryEntry[P]>
      : GetScalarType<T[P], AggregateLoanHistoryEntry[P]>
  }




  export type LoanHistoryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanHistoryEntryWhereInput
    orderBy?: LoanHistoryEntryOrderByWithAggregationInput | LoanHistoryEntryOrderByWithAggregationInput[]
    by: LoanHistoryEntryScalarFieldEnum[] | LoanHistoryEntryScalarFieldEnum
    having?: LoanHistoryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanHistoryEntryCountAggregateInputType | true
    _min?: LoanHistoryEntryMinAggregateInputType
    _max?: LoanHistoryEntryMaxAggregateInputType
  }

  export type LoanHistoryEntryGroupByOutputType = {
    id: string
    loanRequestId: string
    stageId: string | null
    timestamp: Date
    userId: string | null
    userName: string
    notes: string | null
    requiredFulfilment: string | null
    ipAddress: string | null
    createdAt: Date
    _count: LoanHistoryEntryCountAggregateOutputType | null
    _min: LoanHistoryEntryMinAggregateOutputType | null
    _max: LoanHistoryEntryMaxAggregateOutputType | null
  }

  type GetLoanHistoryEntryGroupByPayload<T extends LoanHistoryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanHistoryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanHistoryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanHistoryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LoanHistoryEntryGroupByOutputType[P]>
        }
      >
    >


  export type LoanHistoryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanRequestId?: boolean
    stageId?: boolean
    timestamp?: boolean
    userId?: boolean
    userName?: boolean
    notes?: boolean
    requiredFulfilment?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
    stage?: boolean | LoanHistoryEntry$stageArgs<ExtArgs>
    user?: boolean | LoanHistoryEntry$userArgs<ExtArgs>
  }, ExtArgs["result"]["loanHistoryEntry"]>

  export type LoanHistoryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanRequestId?: boolean
    stageId?: boolean
    timestamp?: boolean
    userId?: boolean
    userName?: boolean
    notes?: boolean
    requiredFulfilment?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
    stage?: boolean | LoanHistoryEntry$stageArgs<ExtArgs>
    user?: boolean | LoanHistoryEntry$userArgs<ExtArgs>
  }, ExtArgs["result"]["loanHistoryEntry"]>

  export type LoanHistoryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanRequestId?: boolean
    stageId?: boolean
    timestamp?: boolean
    userId?: boolean
    userName?: boolean
    notes?: boolean
    requiredFulfilment?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
    stage?: boolean | LoanHistoryEntry$stageArgs<ExtArgs>
    user?: boolean | LoanHistoryEntry$userArgs<ExtArgs>
  }, ExtArgs["result"]["loanHistoryEntry"]>

  export type LoanHistoryEntrySelectScalar = {
    id?: boolean
    loanRequestId?: boolean
    stageId?: boolean
    timestamp?: boolean
    userId?: boolean
    userName?: boolean
    notes?: boolean
    requiredFulfilment?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type LoanHistoryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loanRequestId" | "stageId" | "timestamp" | "userId" | "userName" | "notes" | "requiredFulfilment" | "ipAddress" | "createdAt", ExtArgs["result"]["loanHistoryEntry"]>
  export type LoanHistoryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
    stage?: boolean | LoanHistoryEntry$stageArgs<ExtArgs>
    user?: boolean | LoanHistoryEntry$userArgs<ExtArgs>
  }
  export type LoanHistoryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
    stage?: boolean | LoanHistoryEntry$stageArgs<ExtArgs>
    user?: boolean | LoanHistoryEntry$userArgs<ExtArgs>
  }
  export type LoanHistoryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
    stage?: boolean | LoanHistoryEntry$stageArgs<ExtArgs>
    user?: boolean | LoanHistoryEntry$userArgs<ExtArgs>
  }

  export type $LoanHistoryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanHistoryEntry"
    objects: {
      loanRequest: Prisma.$LoanRequestPayload<ExtArgs>
      stage: Prisma.$LoanStagePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanRequestId: string
      stageId: string | null
      timestamp: Date
      userId: string | null
      userName: string
      notes: string | null
      requiredFulfilment: string | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["loanHistoryEntry"]>
    composites: {}
  }

  type LoanHistoryEntryGetPayload<S extends boolean | null | undefined | LoanHistoryEntryDefaultArgs> = $Result.GetResult<Prisma.$LoanHistoryEntryPayload, S>

  type LoanHistoryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanHistoryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanHistoryEntryCountAggregateInputType | true
    }

  export interface LoanHistoryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanHistoryEntry'], meta: { name: 'LoanHistoryEntry' } }
    /**
     * Find zero or one LoanHistoryEntry that matches the filter.
     * @param {LoanHistoryEntryFindUniqueArgs} args - Arguments to find a LoanHistoryEntry
     * @example
     * // Get one LoanHistoryEntry
     * const loanHistoryEntry = await prisma.loanHistoryEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanHistoryEntryFindUniqueArgs>(args: SelectSubset<T, LoanHistoryEntryFindUniqueArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanHistoryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanHistoryEntryFindUniqueOrThrowArgs} args - Arguments to find a LoanHistoryEntry
     * @example
     * // Get one LoanHistoryEntry
     * const loanHistoryEntry = await prisma.loanHistoryEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanHistoryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanHistoryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanHistoryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryFindFirstArgs} args - Arguments to find a LoanHistoryEntry
     * @example
     * // Get one LoanHistoryEntry
     * const loanHistoryEntry = await prisma.loanHistoryEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanHistoryEntryFindFirstArgs>(args?: SelectSubset<T, LoanHistoryEntryFindFirstArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanHistoryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryFindFirstOrThrowArgs} args - Arguments to find a LoanHistoryEntry
     * @example
     * // Get one LoanHistoryEntry
     * const loanHistoryEntry = await prisma.loanHistoryEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanHistoryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanHistoryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanHistoryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanHistoryEntries
     * const loanHistoryEntries = await prisma.loanHistoryEntry.findMany()
     * 
     * // Get first 10 LoanHistoryEntries
     * const loanHistoryEntries = await prisma.loanHistoryEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanHistoryEntryWithIdOnly = await prisma.loanHistoryEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanHistoryEntryFindManyArgs>(args?: SelectSubset<T, LoanHistoryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanHistoryEntry.
     * @param {LoanHistoryEntryCreateArgs} args - Arguments to create a LoanHistoryEntry.
     * @example
     * // Create one LoanHistoryEntry
     * const LoanHistoryEntry = await prisma.loanHistoryEntry.create({
     *   data: {
     *     // ... data to create a LoanHistoryEntry
     *   }
     * })
     * 
     */
    create<T extends LoanHistoryEntryCreateArgs>(args: SelectSubset<T, LoanHistoryEntryCreateArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanHistoryEntries.
     * @param {LoanHistoryEntryCreateManyArgs} args - Arguments to create many LoanHistoryEntries.
     * @example
     * // Create many LoanHistoryEntries
     * const loanHistoryEntry = await prisma.loanHistoryEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanHistoryEntryCreateManyArgs>(args?: SelectSubset<T, LoanHistoryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanHistoryEntries and returns the data saved in the database.
     * @param {LoanHistoryEntryCreateManyAndReturnArgs} args - Arguments to create many LoanHistoryEntries.
     * @example
     * // Create many LoanHistoryEntries
     * const loanHistoryEntry = await prisma.loanHistoryEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanHistoryEntries and only return the `id`
     * const loanHistoryEntryWithIdOnly = await prisma.loanHistoryEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanHistoryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanHistoryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanHistoryEntry.
     * @param {LoanHistoryEntryDeleteArgs} args - Arguments to delete one LoanHistoryEntry.
     * @example
     * // Delete one LoanHistoryEntry
     * const LoanHistoryEntry = await prisma.loanHistoryEntry.delete({
     *   where: {
     *     // ... filter to delete one LoanHistoryEntry
     *   }
     * })
     * 
     */
    delete<T extends LoanHistoryEntryDeleteArgs>(args: SelectSubset<T, LoanHistoryEntryDeleteArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanHistoryEntry.
     * @param {LoanHistoryEntryUpdateArgs} args - Arguments to update one LoanHistoryEntry.
     * @example
     * // Update one LoanHistoryEntry
     * const loanHistoryEntry = await prisma.loanHistoryEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanHistoryEntryUpdateArgs>(args: SelectSubset<T, LoanHistoryEntryUpdateArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanHistoryEntries.
     * @param {LoanHistoryEntryDeleteManyArgs} args - Arguments to filter LoanHistoryEntries to delete.
     * @example
     * // Delete a few LoanHistoryEntries
     * const { count } = await prisma.loanHistoryEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanHistoryEntryDeleteManyArgs>(args?: SelectSubset<T, LoanHistoryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanHistoryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanHistoryEntries
     * const loanHistoryEntry = await prisma.loanHistoryEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanHistoryEntryUpdateManyArgs>(args: SelectSubset<T, LoanHistoryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanHistoryEntries and returns the data updated in the database.
     * @param {LoanHistoryEntryUpdateManyAndReturnArgs} args - Arguments to update many LoanHistoryEntries.
     * @example
     * // Update many LoanHistoryEntries
     * const loanHistoryEntry = await prisma.loanHistoryEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanHistoryEntries and only return the `id`
     * const loanHistoryEntryWithIdOnly = await prisma.loanHistoryEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanHistoryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanHistoryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanHistoryEntry.
     * @param {LoanHistoryEntryUpsertArgs} args - Arguments to update or create a LoanHistoryEntry.
     * @example
     * // Update or create a LoanHistoryEntry
     * const loanHistoryEntry = await prisma.loanHistoryEntry.upsert({
     *   create: {
     *     // ... data to create a LoanHistoryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanHistoryEntry we want to update
     *   }
     * })
     */
    upsert<T extends LoanHistoryEntryUpsertArgs>(args: SelectSubset<T, LoanHistoryEntryUpsertArgs<ExtArgs>>): Prisma__LoanHistoryEntryClient<$Result.GetResult<Prisma.$LoanHistoryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanHistoryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryCountArgs} args - Arguments to filter LoanHistoryEntries to count.
     * @example
     * // Count the number of LoanHistoryEntries
     * const count = await prisma.loanHistoryEntry.count({
     *   where: {
     *     // ... the filter for the LoanHistoryEntries we want to count
     *   }
     * })
    **/
    count<T extends LoanHistoryEntryCountArgs>(
      args?: Subset<T, LoanHistoryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanHistoryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanHistoryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanHistoryEntryAggregateArgs>(args: Subset<T, LoanHistoryEntryAggregateArgs>): Prisma.PrismaPromise<GetLoanHistoryEntryAggregateType<T>>

    /**
     * Group by LoanHistoryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanHistoryEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanHistoryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanHistoryEntryGroupByArgs['orderBy'] }
        : { orderBy?: LoanHistoryEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanHistoryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanHistoryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanHistoryEntry model
   */
  readonly fields: LoanHistoryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanHistoryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanHistoryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loanRequest<T extends LoanRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequestDefaultArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stage<T extends LoanHistoryEntry$stageArgs<ExtArgs> = {}>(args?: Subset<T, LoanHistoryEntry$stageArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends LoanHistoryEntry$userArgs<ExtArgs> = {}>(args?: Subset<T, LoanHistoryEntry$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanHistoryEntry model
   */
  interface LoanHistoryEntryFieldRefs {
    readonly id: FieldRef<"LoanHistoryEntry", 'String'>
    readonly loanRequestId: FieldRef<"LoanHistoryEntry", 'String'>
    readonly stageId: FieldRef<"LoanHistoryEntry", 'String'>
    readonly timestamp: FieldRef<"LoanHistoryEntry", 'DateTime'>
    readonly userId: FieldRef<"LoanHistoryEntry", 'String'>
    readonly userName: FieldRef<"LoanHistoryEntry", 'String'>
    readonly notes: FieldRef<"LoanHistoryEntry", 'String'>
    readonly requiredFulfilment: FieldRef<"LoanHistoryEntry", 'String'>
    readonly ipAddress: FieldRef<"LoanHistoryEntry", 'String'>
    readonly createdAt: FieldRef<"LoanHistoryEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanHistoryEntry findUnique
   */
  export type LoanHistoryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LoanHistoryEntry to fetch.
     */
    where: LoanHistoryEntryWhereUniqueInput
  }

  /**
   * LoanHistoryEntry findUniqueOrThrow
   */
  export type LoanHistoryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LoanHistoryEntry to fetch.
     */
    where: LoanHistoryEntryWhereUniqueInput
  }

  /**
   * LoanHistoryEntry findFirst
   */
  export type LoanHistoryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LoanHistoryEntry to fetch.
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanHistoryEntries to fetch.
     */
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanHistoryEntries.
     */
    cursor?: LoanHistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanHistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanHistoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanHistoryEntries.
     */
    distinct?: LoanHistoryEntryScalarFieldEnum | LoanHistoryEntryScalarFieldEnum[]
  }

  /**
   * LoanHistoryEntry findFirstOrThrow
   */
  export type LoanHistoryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LoanHistoryEntry to fetch.
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanHistoryEntries to fetch.
     */
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanHistoryEntries.
     */
    cursor?: LoanHistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanHistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanHistoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanHistoryEntries.
     */
    distinct?: LoanHistoryEntryScalarFieldEnum | LoanHistoryEntryScalarFieldEnum[]
  }

  /**
   * LoanHistoryEntry findMany
   */
  export type LoanHistoryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LoanHistoryEntries to fetch.
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanHistoryEntries to fetch.
     */
    orderBy?: LoanHistoryEntryOrderByWithRelationInput | LoanHistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanHistoryEntries.
     */
    cursor?: LoanHistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanHistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanHistoryEntries.
     */
    skip?: number
    distinct?: LoanHistoryEntryScalarFieldEnum | LoanHistoryEntryScalarFieldEnum[]
  }

  /**
   * LoanHistoryEntry create
   */
  export type LoanHistoryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanHistoryEntry.
     */
    data: XOR<LoanHistoryEntryCreateInput, LoanHistoryEntryUncheckedCreateInput>
  }

  /**
   * LoanHistoryEntry createMany
   */
  export type LoanHistoryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanHistoryEntries.
     */
    data: LoanHistoryEntryCreateManyInput | LoanHistoryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanHistoryEntry createManyAndReturn
   */
  export type LoanHistoryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LoanHistoryEntries.
     */
    data: LoanHistoryEntryCreateManyInput | LoanHistoryEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanHistoryEntry update
   */
  export type LoanHistoryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanHistoryEntry.
     */
    data: XOR<LoanHistoryEntryUpdateInput, LoanHistoryEntryUncheckedUpdateInput>
    /**
     * Choose, which LoanHistoryEntry to update.
     */
    where: LoanHistoryEntryWhereUniqueInput
  }

  /**
   * LoanHistoryEntry updateMany
   */
  export type LoanHistoryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanHistoryEntries.
     */
    data: XOR<LoanHistoryEntryUpdateManyMutationInput, LoanHistoryEntryUncheckedUpdateManyInput>
    /**
     * Filter which LoanHistoryEntries to update
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * Limit how many LoanHistoryEntries to update.
     */
    limit?: number
  }

  /**
   * LoanHistoryEntry updateManyAndReturn
   */
  export type LoanHistoryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * The data used to update LoanHistoryEntries.
     */
    data: XOR<LoanHistoryEntryUpdateManyMutationInput, LoanHistoryEntryUncheckedUpdateManyInput>
    /**
     * Filter which LoanHistoryEntries to update
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * Limit how many LoanHistoryEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanHistoryEntry upsert
   */
  export type LoanHistoryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanHistoryEntry to update in case it exists.
     */
    where: LoanHistoryEntryWhereUniqueInput
    /**
     * In case the LoanHistoryEntry found by the `where` argument doesn't exist, create a new LoanHistoryEntry with this data.
     */
    create: XOR<LoanHistoryEntryCreateInput, LoanHistoryEntryUncheckedCreateInput>
    /**
     * In case the LoanHistoryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanHistoryEntryUpdateInput, LoanHistoryEntryUncheckedUpdateInput>
  }

  /**
   * LoanHistoryEntry delete
   */
  export type LoanHistoryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
    /**
     * Filter which LoanHistoryEntry to delete.
     */
    where: LoanHistoryEntryWhereUniqueInput
  }

  /**
   * LoanHistoryEntry deleteMany
   */
  export type LoanHistoryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanHistoryEntries to delete
     */
    where?: LoanHistoryEntryWhereInput
    /**
     * Limit how many LoanHistoryEntries to delete.
     */
    limit?: number
  }

  /**
   * LoanHistoryEntry.stage
   */
  export type LoanHistoryEntry$stageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    where?: LoanStageWhereInput
  }

  /**
   * LoanHistoryEntry.user
   */
  export type LoanHistoryEntry$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LoanHistoryEntry without action
   */
  export type LoanHistoryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanHistoryEntry
     */
    select?: LoanHistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanHistoryEntry
     */
    omit?: LoanHistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanHistoryEntryInclude<ExtArgs> | null
  }


  /**
   * Model StageConfig
   */

  export type AggregateStageConfig = {
    _count: StageConfigCountAggregateOutputType | null
    _avg: StageConfigAvgAggregateOutputType | null
    _sum: StageConfigSumAggregateOutputType | null
    _min: StageConfigMinAggregateOutputType | null
    _max: StageConfigMaxAggregateOutputType | null
  }

  export type StageConfigAvgAggregateOutputType = {
    defaultTimelineDays: number | null
    percentageWeight: number | null
  }

  export type StageConfigSumAggregateOutputType = {
    defaultTimelineDays: number | null
    percentageWeight: number | null
  }

  export type StageConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    loanStageId: string | null
    defaultTimelineDays: number | null
    targetRoleId: string | null
    percentageWeight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StageConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    loanStageId: string | null
    defaultTimelineDays: number | null
    targetRoleId: string | null
    percentageWeight: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StageConfigCountAggregateOutputType = {
    id: number
    name: number
    loanStageId: number
    defaultTimelineDays: number
    targetRoleId: number
    percentageWeight: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StageConfigAvgAggregateInputType = {
    defaultTimelineDays?: true
    percentageWeight?: true
  }

  export type StageConfigSumAggregateInputType = {
    defaultTimelineDays?: true
    percentageWeight?: true
  }

  export type StageConfigMinAggregateInputType = {
    id?: true
    name?: true
    loanStageId?: true
    defaultTimelineDays?: true
    targetRoleId?: true
    percentageWeight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StageConfigMaxAggregateInputType = {
    id?: true
    name?: true
    loanStageId?: true
    defaultTimelineDays?: true
    targetRoleId?: true
    percentageWeight?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StageConfigCountAggregateInputType = {
    id?: true
    name?: true
    loanStageId?: true
    defaultTimelineDays?: true
    targetRoleId?: true
    percentageWeight?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StageConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StageConfig to aggregate.
     */
    where?: StageConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageConfigs to fetch.
     */
    orderBy?: StageConfigOrderByWithRelationInput | StageConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StageConfigs
    **/
    _count?: true | StageConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageConfigMaxAggregateInputType
  }

  export type GetStageConfigAggregateType<T extends StageConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateStageConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStageConfig[P]>
      : GetScalarType<T[P], AggregateStageConfig[P]>
  }




  export type StageConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageConfigWhereInput
    orderBy?: StageConfigOrderByWithAggregationInput | StageConfigOrderByWithAggregationInput[]
    by: StageConfigScalarFieldEnum[] | StageConfigScalarFieldEnum
    having?: StageConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageConfigCountAggregateInputType | true
    _avg?: StageConfigAvgAggregateInputType
    _sum?: StageConfigSumAggregateInputType
    _min?: StageConfigMinAggregateInputType
    _max?: StageConfigMaxAggregateInputType
  }

  export type StageConfigGroupByOutputType = {
    id: string
    name: string
    loanStageId: string | null
    defaultTimelineDays: number
    targetRoleId: string | null
    percentageWeight: number
    createdAt: Date
    updatedAt: Date
    _count: StageConfigCountAggregateOutputType | null
    _avg: StageConfigAvgAggregateOutputType | null
    _sum: StageConfigSumAggregateOutputType | null
    _min: StageConfigMinAggregateOutputType | null
    _max: StageConfigMaxAggregateOutputType | null
  }

  type GetStageConfigGroupByPayload<T extends StageConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageConfigGroupByOutputType[P]>
            : GetScalarType<T[P], StageConfigGroupByOutputType[P]>
        }
      >
    >


  export type StageConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    loanStageId?: boolean
    defaultTimelineDays?: boolean
    targetRoleId?: boolean
    percentageWeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanStage?: boolean | StageConfig$loanStageArgs<ExtArgs>
    targetRole?: boolean | StageConfig$targetRoleArgs<ExtArgs>
    requiredDocuments?: boolean | StageConfig$requiredDocumentsArgs<ExtArgs>
    _count?: boolean | StageConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stageConfig"]>

  export type StageConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    loanStageId?: boolean
    defaultTimelineDays?: boolean
    targetRoleId?: boolean
    percentageWeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanStage?: boolean | StageConfig$loanStageArgs<ExtArgs>
    targetRole?: boolean | StageConfig$targetRoleArgs<ExtArgs>
  }, ExtArgs["result"]["stageConfig"]>

  export type StageConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    loanStageId?: boolean
    defaultTimelineDays?: boolean
    targetRoleId?: boolean
    percentageWeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanStage?: boolean | StageConfig$loanStageArgs<ExtArgs>
    targetRole?: boolean | StageConfig$targetRoleArgs<ExtArgs>
  }, ExtArgs["result"]["stageConfig"]>

  export type StageConfigSelectScalar = {
    id?: boolean
    name?: boolean
    loanStageId?: boolean
    defaultTimelineDays?: boolean
    targetRoleId?: boolean
    percentageWeight?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StageConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "loanStageId" | "defaultTimelineDays" | "targetRoleId" | "percentageWeight" | "createdAt" | "updatedAt", ExtArgs["result"]["stageConfig"]>
  export type StageConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanStage?: boolean | StageConfig$loanStageArgs<ExtArgs>
    targetRole?: boolean | StageConfig$targetRoleArgs<ExtArgs>
    requiredDocuments?: boolean | StageConfig$requiredDocumentsArgs<ExtArgs>
    _count?: boolean | StageConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StageConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanStage?: boolean | StageConfig$loanStageArgs<ExtArgs>
    targetRole?: boolean | StageConfig$targetRoleArgs<ExtArgs>
  }
  export type StageConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanStage?: boolean | StageConfig$loanStageArgs<ExtArgs>
    targetRole?: boolean | StageConfig$targetRoleArgs<ExtArgs>
  }

  export type $StageConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StageConfig"
    objects: {
      loanStage: Prisma.$LoanStagePayload<ExtArgs> | null
      targetRole: Prisma.$RolePayload<ExtArgs> | null
      requiredDocuments: Prisma.$RequiredDocumentConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      loanStageId: string | null
      defaultTimelineDays: number
      targetRoleId: string | null
      percentageWeight: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stageConfig"]>
    composites: {}
  }

  type StageConfigGetPayload<S extends boolean | null | undefined | StageConfigDefaultArgs> = $Result.GetResult<Prisma.$StageConfigPayload, S>

  type StageConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StageConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StageConfigCountAggregateInputType | true
    }

  export interface StageConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StageConfig'], meta: { name: 'StageConfig' } }
    /**
     * Find zero or one StageConfig that matches the filter.
     * @param {StageConfigFindUniqueArgs} args - Arguments to find a StageConfig
     * @example
     * // Get one StageConfig
     * const stageConfig = await prisma.stageConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageConfigFindUniqueArgs>(args: SelectSubset<T, StageConfigFindUniqueArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StageConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StageConfigFindUniqueOrThrowArgs} args - Arguments to find a StageConfig
     * @example
     * // Get one StageConfig
     * const stageConfig = await prisma.stageConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, StageConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StageConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigFindFirstArgs} args - Arguments to find a StageConfig
     * @example
     * // Get one StageConfig
     * const stageConfig = await prisma.stageConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageConfigFindFirstArgs>(args?: SelectSubset<T, StageConfigFindFirstArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StageConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigFindFirstOrThrowArgs} args - Arguments to find a StageConfig
     * @example
     * // Get one StageConfig
     * const stageConfig = await prisma.stageConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, StageConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StageConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StageConfigs
     * const stageConfigs = await prisma.stageConfig.findMany()
     * 
     * // Get first 10 StageConfigs
     * const stageConfigs = await prisma.stageConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageConfigWithIdOnly = await prisma.stageConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageConfigFindManyArgs>(args?: SelectSubset<T, StageConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StageConfig.
     * @param {StageConfigCreateArgs} args - Arguments to create a StageConfig.
     * @example
     * // Create one StageConfig
     * const StageConfig = await prisma.stageConfig.create({
     *   data: {
     *     // ... data to create a StageConfig
     *   }
     * })
     * 
     */
    create<T extends StageConfigCreateArgs>(args: SelectSubset<T, StageConfigCreateArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StageConfigs.
     * @param {StageConfigCreateManyArgs} args - Arguments to create many StageConfigs.
     * @example
     * // Create many StageConfigs
     * const stageConfig = await prisma.stageConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageConfigCreateManyArgs>(args?: SelectSubset<T, StageConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StageConfigs and returns the data saved in the database.
     * @param {StageConfigCreateManyAndReturnArgs} args - Arguments to create many StageConfigs.
     * @example
     * // Create many StageConfigs
     * const stageConfig = await prisma.stageConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StageConfigs and only return the `id`
     * const stageConfigWithIdOnly = await prisma.stageConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StageConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, StageConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StageConfig.
     * @param {StageConfigDeleteArgs} args - Arguments to delete one StageConfig.
     * @example
     * // Delete one StageConfig
     * const StageConfig = await prisma.stageConfig.delete({
     *   where: {
     *     // ... filter to delete one StageConfig
     *   }
     * })
     * 
     */
    delete<T extends StageConfigDeleteArgs>(args: SelectSubset<T, StageConfigDeleteArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StageConfig.
     * @param {StageConfigUpdateArgs} args - Arguments to update one StageConfig.
     * @example
     * // Update one StageConfig
     * const stageConfig = await prisma.stageConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageConfigUpdateArgs>(args: SelectSubset<T, StageConfigUpdateArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StageConfigs.
     * @param {StageConfigDeleteManyArgs} args - Arguments to filter StageConfigs to delete.
     * @example
     * // Delete a few StageConfigs
     * const { count } = await prisma.stageConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageConfigDeleteManyArgs>(args?: SelectSubset<T, StageConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StageConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StageConfigs
     * const stageConfig = await prisma.stageConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageConfigUpdateManyArgs>(args: SelectSubset<T, StageConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StageConfigs and returns the data updated in the database.
     * @param {StageConfigUpdateManyAndReturnArgs} args - Arguments to update many StageConfigs.
     * @example
     * // Update many StageConfigs
     * const stageConfig = await prisma.stageConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StageConfigs and only return the `id`
     * const stageConfigWithIdOnly = await prisma.stageConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StageConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, StageConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StageConfig.
     * @param {StageConfigUpsertArgs} args - Arguments to update or create a StageConfig.
     * @example
     * // Update or create a StageConfig
     * const stageConfig = await prisma.stageConfig.upsert({
     *   create: {
     *     // ... data to create a StageConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StageConfig we want to update
     *   }
     * })
     */
    upsert<T extends StageConfigUpsertArgs>(args: SelectSubset<T, StageConfigUpsertArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StageConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigCountArgs} args - Arguments to filter StageConfigs to count.
     * @example
     * // Count the number of StageConfigs
     * const count = await prisma.stageConfig.count({
     *   where: {
     *     // ... the filter for the StageConfigs we want to count
     *   }
     * })
    **/
    count<T extends StageConfigCountArgs>(
      args?: Subset<T, StageConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StageConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StageConfigAggregateArgs>(args: Subset<T, StageConfigAggregateArgs>): Prisma.PrismaPromise<GetStageConfigAggregateType<T>>

    /**
     * Group by StageConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StageConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageConfigGroupByArgs['orderBy'] }
        : { orderBy?: StageConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StageConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StageConfig model
   */
  readonly fields: StageConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StageConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loanStage<T extends StageConfig$loanStageArgs<ExtArgs> = {}>(args?: Subset<T, StageConfig$loanStageArgs<ExtArgs>>): Prisma__LoanStageClient<$Result.GetResult<Prisma.$LoanStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    targetRole<T extends StageConfig$targetRoleArgs<ExtArgs> = {}>(args?: Subset<T, StageConfig$targetRoleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requiredDocuments<T extends StageConfig$requiredDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, StageConfig$requiredDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StageConfig model
   */
  interface StageConfigFieldRefs {
    readonly id: FieldRef<"StageConfig", 'String'>
    readonly name: FieldRef<"StageConfig", 'String'>
    readonly loanStageId: FieldRef<"StageConfig", 'String'>
    readonly defaultTimelineDays: FieldRef<"StageConfig", 'Int'>
    readonly targetRoleId: FieldRef<"StageConfig", 'String'>
    readonly percentageWeight: FieldRef<"StageConfig", 'Int'>
    readonly createdAt: FieldRef<"StageConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"StageConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StageConfig findUnique
   */
  export type StageConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * Filter, which StageConfig to fetch.
     */
    where: StageConfigWhereUniqueInput
  }

  /**
   * StageConfig findUniqueOrThrow
   */
  export type StageConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * Filter, which StageConfig to fetch.
     */
    where: StageConfigWhereUniqueInput
  }

  /**
   * StageConfig findFirst
   */
  export type StageConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * Filter, which StageConfig to fetch.
     */
    where?: StageConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageConfigs to fetch.
     */
    orderBy?: StageConfigOrderByWithRelationInput | StageConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StageConfigs.
     */
    cursor?: StageConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StageConfigs.
     */
    distinct?: StageConfigScalarFieldEnum | StageConfigScalarFieldEnum[]
  }

  /**
   * StageConfig findFirstOrThrow
   */
  export type StageConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * Filter, which StageConfig to fetch.
     */
    where?: StageConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageConfigs to fetch.
     */
    orderBy?: StageConfigOrderByWithRelationInput | StageConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StageConfigs.
     */
    cursor?: StageConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StageConfigs.
     */
    distinct?: StageConfigScalarFieldEnum | StageConfigScalarFieldEnum[]
  }

  /**
   * StageConfig findMany
   */
  export type StageConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * Filter, which StageConfigs to fetch.
     */
    where?: StageConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StageConfigs to fetch.
     */
    orderBy?: StageConfigOrderByWithRelationInput | StageConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StageConfigs.
     */
    cursor?: StageConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StageConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StageConfigs.
     */
    skip?: number
    distinct?: StageConfigScalarFieldEnum | StageConfigScalarFieldEnum[]
  }

  /**
   * StageConfig create
   */
  export type StageConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a StageConfig.
     */
    data: XOR<StageConfigCreateInput, StageConfigUncheckedCreateInput>
  }

  /**
   * StageConfig createMany
   */
  export type StageConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StageConfigs.
     */
    data: StageConfigCreateManyInput | StageConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StageConfig createManyAndReturn
   */
  export type StageConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * The data used to create many StageConfigs.
     */
    data: StageConfigCreateManyInput | StageConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StageConfig update
   */
  export type StageConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a StageConfig.
     */
    data: XOR<StageConfigUpdateInput, StageConfigUncheckedUpdateInput>
    /**
     * Choose, which StageConfig to update.
     */
    where: StageConfigWhereUniqueInput
  }

  /**
   * StageConfig updateMany
   */
  export type StageConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StageConfigs.
     */
    data: XOR<StageConfigUpdateManyMutationInput, StageConfigUncheckedUpdateManyInput>
    /**
     * Filter which StageConfigs to update
     */
    where?: StageConfigWhereInput
    /**
     * Limit how many StageConfigs to update.
     */
    limit?: number
  }

  /**
   * StageConfig updateManyAndReturn
   */
  export type StageConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * The data used to update StageConfigs.
     */
    data: XOR<StageConfigUpdateManyMutationInput, StageConfigUncheckedUpdateManyInput>
    /**
     * Filter which StageConfigs to update
     */
    where?: StageConfigWhereInput
    /**
     * Limit how many StageConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StageConfig upsert
   */
  export type StageConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the StageConfig to update in case it exists.
     */
    where: StageConfigWhereUniqueInput
    /**
     * In case the StageConfig found by the `where` argument doesn't exist, create a new StageConfig with this data.
     */
    create: XOR<StageConfigCreateInput, StageConfigUncheckedCreateInput>
    /**
     * In case the StageConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageConfigUpdateInput, StageConfigUncheckedUpdateInput>
  }

  /**
   * StageConfig delete
   */
  export type StageConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
    /**
     * Filter which StageConfig to delete.
     */
    where: StageConfigWhereUniqueInput
  }

  /**
   * StageConfig deleteMany
   */
  export type StageConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StageConfigs to delete
     */
    where?: StageConfigWhereInput
    /**
     * Limit how many StageConfigs to delete.
     */
    limit?: number
  }

  /**
   * StageConfig.loanStage
   */
  export type StageConfig$loanStageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanStage
     */
    select?: LoanStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanStage
     */
    omit?: LoanStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanStageInclude<ExtArgs> | null
    where?: LoanStageWhereInput
  }

  /**
   * StageConfig.targetRole
   */
  export type StageConfig$targetRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * StageConfig.requiredDocuments
   */
  export type StageConfig$requiredDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    where?: RequiredDocumentConfigWhereInput
    orderBy?: RequiredDocumentConfigOrderByWithRelationInput | RequiredDocumentConfigOrderByWithRelationInput[]
    cursor?: RequiredDocumentConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequiredDocumentConfigScalarFieldEnum | RequiredDocumentConfigScalarFieldEnum[]
  }

  /**
   * StageConfig without action
   */
  export type StageConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageConfig
     */
    select?: StageConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StageConfig
     */
    omit?: StageConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageConfigInclude<ExtArgs> | null
  }


  /**
   * Model RequiredDocumentConfig
   */

  export type AggregateRequiredDocumentConfig = {
    _count: RequiredDocumentConfigCountAggregateOutputType | null
    _min: RequiredDocumentConfigMinAggregateOutputType | null
    _max: RequiredDocumentConfigMaxAggregateOutputType | null
  }

  export type RequiredDocumentConfigMinAggregateOutputType = {
    id: string | null
    stageConfigId: string | null
    name: string | null
    isMandatory: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequiredDocumentConfigMaxAggregateOutputType = {
    id: string | null
    stageConfigId: string | null
    name: string | null
    isMandatory: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequiredDocumentConfigCountAggregateOutputType = {
    id: number
    stageConfigId: number
    name: number
    isMandatory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequiredDocumentConfigMinAggregateInputType = {
    id?: true
    stageConfigId?: true
    name?: true
    isMandatory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequiredDocumentConfigMaxAggregateInputType = {
    id?: true
    stageConfigId?: true
    name?: true
    isMandatory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequiredDocumentConfigCountAggregateInputType = {
    id?: true
    stageConfigId?: true
    name?: true
    isMandatory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequiredDocumentConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequiredDocumentConfig to aggregate.
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredDocumentConfigs to fetch.
     */
    orderBy?: RequiredDocumentConfigOrderByWithRelationInput | RequiredDocumentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequiredDocumentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredDocumentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredDocumentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequiredDocumentConfigs
    **/
    _count?: true | RequiredDocumentConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequiredDocumentConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequiredDocumentConfigMaxAggregateInputType
  }

  export type GetRequiredDocumentConfigAggregateType<T extends RequiredDocumentConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateRequiredDocumentConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequiredDocumentConfig[P]>
      : GetScalarType<T[P], AggregateRequiredDocumentConfig[P]>
  }




  export type RequiredDocumentConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequiredDocumentConfigWhereInput
    orderBy?: RequiredDocumentConfigOrderByWithAggregationInput | RequiredDocumentConfigOrderByWithAggregationInput[]
    by: RequiredDocumentConfigScalarFieldEnum[] | RequiredDocumentConfigScalarFieldEnum
    having?: RequiredDocumentConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequiredDocumentConfigCountAggregateInputType | true
    _min?: RequiredDocumentConfigMinAggregateInputType
    _max?: RequiredDocumentConfigMaxAggregateInputType
  }

  export type RequiredDocumentConfigGroupByOutputType = {
    id: string
    stageConfigId: string
    name: string
    isMandatory: boolean
    createdAt: Date
    updatedAt: Date
    _count: RequiredDocumentConfigCountAggregateOutputType | null
    _min: RequiredDocumentConfigMinAggregateOutputType | null
    _max: RequiredDocumentConfigMaxAggregateOutputType | null
  }

  type GetRequiredDocumentConfigGroupByPayload<T extends RequiredDocumentConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequiredDocumentConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequiredDocumentConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequiredDocumentConfigGroupByOutputType[P]>
            : GetScalarType<T[P], RequiredDocumentConfigGroupByOutputType[P]>
        }
      >
    >


  export type RequiredDocumentConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stageConfigId?: boolean
    name?: boolean
    isMandatory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stageConfig?: boolean | StageConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiredDocumentConfig"]>

  export type RequiredDocumentConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stageConfigId?: boolean
    name?: boolean
    isMandatory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stageConfig?: boolean | StageConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiredDocumentConfig"]>

  export type RequiredDocumentConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stageConfigId?: boolean
    name?: boolean
    isMandatory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stageConfig?: boolean | StageConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiredDocumentConfig"]>

  export type RequiredDocumentConfigSelectScalar = {
    id?: boolean
    stageConfigId?: boolean
    name?: boolean
    isMandatory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequiredDocumentConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stageConfigId" | "name" | "isMandatory" | "createdAt" | "updatedAt", ExtArgs["result"]["requiredDocumentConfig"]>
  export type RequiredDocumentConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stageConfig?: boolean | StageConfigDefaultArgs<ExtArgs>
  }
  export type RequiredDocumentConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stageConfig?: boolean | StageConfigDefaultArgs<ExtArgs>
  }
  export type RequiredDocumentConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stageConfig?: boolean | StageConfigDefaultArgs<ExtArgs>
  }

  export type $RequiredDocumentConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequiredDocumentConfig"
    objects: {
      stageConfig: Prisma.$StageConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stageConfigId: string
      name: string
      isMandatory: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requiredDocumentConfig"]>
    composites: {}
  }

  type RequiredDocumentConfigGetPayload<S extends boolean | null | undefined | RequiredDocumentConfigDefaultArgs> = $Result.GetResult<Prisma.$RequiredDocumentConfigPayload, S>

  type RequiredDocumentConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequiredDocumentConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequiredDocumentConfigCountAggregateInputType | true
    }

  export interface RequiredDocumentConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequiredDocumentConfig'], meta: { name: 'RequiredDocumentConfig' } }
    /**
     * Find zero or one RequiredDocumentConfig that matches the filter.
     * @param {RequiredDocumentConfigFindUniqueArgs} args - Arguments to find a RequiredDocumentConfig
     * @example
     * // Get one RequiredDocumentConfig
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequiredDocumentConfigFindUniqueArgs>(args: SelectSubset<T, RequiredDocumentConfigFindUniqueArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequiredDocumentConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequiredDocumentConfigFindUniqueOrThrowArgs} args - Arguments to find a RequiredDocumentConfig
     * @example
     * // Get one RequiredDocumentConfig
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequiredDocumentConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, RequiredDocumentConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequiredDocumentConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigFindFirstArgs} args - Arguments to find a RequiredDocumentConfig
     * @example
     * // Get one RequiredDocumentConfig
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequiredDocumentConfigFindFirstArgs>(args?: SelectSubset<T, RequiredDocumentConfigFindFirstArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequiredDocumentConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigFindFirstOrThrowArgs} args - Arguments to find a RequiredDocumentConfig
     * @example
     * // Get one RequiredDocumentConfig
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequiredDocumentConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, RequiredDocumentConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequiredDocumentConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequiredDocumentConfigs
     * const requiredDocumentConfigs = await prisma.requiredDocumentConfig.findMany()
     * 
     * // Get first 10 RequiredDocumentConfigs
     * const requiredDocumentConfigs = await prisma.requiredDocumentConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requiredDocumentConfigWithIdOnly = await prisma.requiredDocumentConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequiredDocumentConfigFindManyArgs>(args?: SelectSubset<T, RequiredDocumentConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequiredDocumentConfig.
     * @param {RequiredDocumentConfigCreateArgs} args - Arguments to create a RequiredDocumentConfig.
     * @example
     * // Create one RequiredDocumentConfig
     * const RequiredDocumentConfig = await prisma.requiredDocumentConfig.create({
     *   data: {
     *     // ... data to create a RequiredDocumentConfig
     *   }
     * })
     * 
     */
    create<T extends RequiredDocumentConfigCreateArgs>(args: SelectSubset<T, RequiredDocumentConfigCreateArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequiredDocumentConfigs.
     * @param {RequiredDocumentConfigCreateManyArgs} args - Arguments to create many RequiredDocumentConfigs.
     * @example
     * // Create many RequiredDocumentConfigs
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequiredDocumentConfigCreateManyArgs>(args?: SelectSubset<T, RequiredDocumentConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequiredDocumentConfigs and returns the data saved in the database.
     * @param {RequiredDocumentConfigCreateManyAndReturnArgs} args - Arguments to create many RequiredDocumentConfigs.
     * @example
     * // Create many RequiredDocumentConfigs
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequiredDocumentConfigs and only return the `id`
     * const requiredDocumentConfigWithIdOnly = await prisma.requiredDocumentConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequiredDocumentConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, RequiredDocumentConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequiredDocumentConfig.
     * @param {RequiredDocumentConfigDeleteArgs} args - Arguments to delete one RequiredDocumentConfig.
     * @example
     * // Delete one RequiredDocumentConfig
     * const RequiredDocumentConfig = await prisma.requiredDocumentConfig.delete({
     *   where: {
     *     // ... filter to delete one RequiredDocumentConfig
     *   }
     * })
     * 
     */
    delete<T extends RequiredDocumentConfigDeleteArgs>(args: SelectSubset<T, RequiredDocumentConfigDeleteArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequiredDocumentConfig.
     * @param {RequiredDocumentConfigUpdateArgs} args - Arguments to update one RequiredDocumentConfig.
     * @example
     * // Update one RequiredDocumentConfig
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequiredDocumentConfigUpdateArgs>(args: SelectSubset<T, RequiredDocumentConfigUpdateArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequiredDocumentConfigs.
     * @param {RequiredDocumentConfigDeleteManyArgs} args - Arguments to filter RequiredDocumentConfigs to delete.
     * @example
     * // Delete a few RequiredDocumentConfigs
     * const { count } = await prisma.requiredDocumentConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequiredDocumentConfigDeleteManyArgs>(args?: SelectSubset<T, RequiredDocumentConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequiredDocumentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequiredDocumentConfigs
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequiredDocumentConfigUpdateManyArgs>(args: SelectSubset<T, RequiredDocumentConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequiredDocumentConfigs and returns the data updated in the database.
     * @param {RequiredDocumentConfigUpdateManyAndReturnArgs} args - Arguments to update many RequiredDocumentConfigs.
     * @example
     * // Update many RequiredDocumentConfigs
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequiredDocumentConfigs and only return the `id`
     * const requiredDocumentConfigWithIdOnly = await prisma.requiredDocumentConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequiredDocumentConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, RequiredDocumentConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequiredDocumentConfig.
     * @param {RequiredDocumentConfigUpsertArgs} args - Arguments to update or create a RequiredDocumentConfig.
     * @example
     * // Update or create a RequiredDocumentConfig
     * const requiredDocumentConfig = await prisma.requiredDocumentConfig.upsert({
     *   create: {
     *     // ... data to create a RequiredDocumentConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequiredDocumentConfig we want to update
     *   }
     * })
     */
    upsert<T extends RequiredDocumentConfigUpsertArgs>(args: SelectSubset<T, RequiredDocumentConfigUpsertArgs<ExtArgs>>): Prisma__RequiredDocumentConfigClient<$Result.GetResult<Prisma.$RequiredDocumentConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequiredDocumentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigCountArgs} args - Arguments to filter RequiredDocumentConfigs to count.
     * @example
     * // Count the number of RequiredDocumentConfigs
     * const count = await prisma.requiredDocumentConfig.count({
     *   where: {
     *     // ... the filter for the RequiredDocumentConfigs we want to count
     *   }
     * })
    **/
    count<T extends RequiredDocumentConfigCountArgs>(
      args?: Subset<T, RequiredDocumentConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequiredDocumentConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequiredDocumentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequiredDocumentConfigAggregateArgs>(args: Subset<T, RequiredDocumentConfigAggregateArgs>): Prisma.PrismaPromise<GetRequiredDocumentConfigAggregateType<T>>

    /**
     * Group by RequiredDocumentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiredDocumentConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequiredDocumentConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequiredDocumentConfigGroupByArgs['orderBy'] }
        : { orderBy?: RequiredDocumentConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequiredDocumentConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequiredDocumentConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequiredDocumentConfig model
   */
  readonly fields: RequiredDocumentConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequiredDocumentConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequiredDocumentConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stageConfig<T extends StageConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StageConfigDefaultArgs<ExtArgs>>): Prisma__StageConfigClient<$Result.GetResult<Prisma.$StageConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequiredDocumentConfig model
   */
  interface RequiredDocumentConfigFieldRefs {
    readonly id: FieldRef<"RequiredDocumentConfig", 'String'>
    readonly stageConfigId: FieldRef<"RequiredDocumentConfig", 'String'>
    readonly name: FieldRef<"RequiredDocumentConfig", 'String'>
    readonly isMandatory: FieldRef<"RequiredDocumentConfig", 'Boolean'>
    readonly createdAt: FieldRef<"RequiredDocumentConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"RequiredDocumentConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequiredDocumentConfig findUnique
   */
  export type RequiredDocumentConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * Filter, which RequiredDocumentConfig to fetch.
     */
    where: RequiredDocumentConfigWhereUniqueInput
  }

  /**
   * RequiredDocumentConfig findUniqueOrThrow
   */
  export type RequiredDocumentConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * Filter, which RequiredDocumentConfig to fetch.
     */
    where: RequiredDocumentConfigWhereUniqueInput
  }

  /**
   * RequiredDocumentConfig findFirst
   */
  export type RequiredDocumentConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * Filter, which RequiredDocumentConfig to fetch.
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredDocumentConfigs to fetch.
     */
    orderBy?: RequiredDocumentConfigOrderByWithRelationInput | RequiredDocumentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequiredDocumentConfigs.
     */
    cursor?: RequiredDocumentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredDocumentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredDocumentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequiredDocumentConfigs.
     */
    distinct?: RequiredDocumentConfigScalarFieldEnum | RequiredDocumentConfigScalarFieldEnum[]
  }

  /**
   * RequiredDocumentConfig findFirstOrThrow
   */
  export type RequiredDocumentConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * Filter, which RequiredDocumentConfig to fetch.
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredDocumentConfigs to fetch.
     */
    orderBy?: RequiredDocumentConfigOrderByWithRelationInput | RequiredDocumentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequiredDocumentConfigs.
     */
    cursor?: RequiredDocumentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredDocumentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredDocumentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequiredDocumentConfigs.
     */
    distinct?: RequiredDocumentConfigScalarFieldEnum | RequiredDocumentConfigScalarFieldEnum[]
  }

  /**
   * RequiredDocumentConfig findMany
   */
  export type RequiredDocumentConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * Filter, which RequiredDocumentConfigs to fetch.
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequiredDocumentConfigs to fetch.
     */
    orderBy?: RequiredDocumentConfigOrderByWithRelationInput | RequiredDocumentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequiredDocumentConfigs.
     */
    cursor?: RequiredDocumentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequiredDocumentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequiredDocumentConfigs.
     */
    skip?: number
    distinct?: RequiredDocumentConfigScalarFieldEnum | RequiredDocumentConfigScalarFieldEnum[]
  }

  /**
   * RequiredDocumentConfig create
   */
  export type RequiredDocumentConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a RequiredDocumentConfig.
     */
    data: XOR<RequiredDocumentConfigCreateInput, RequiredDocumentConfigUncheckedCreateInput>
  }

  /**
   * RequiredDocumentConfig createMany
   */
  export type RequiredDocumentConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequiredDocumentConfigs.
     */
    data: RequiredDocumentConfigCreateManyInput | RequiredDocumentConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequiredDocumentConfig createManyAndReturn
   */
  export type RequiredDocumentConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * The data used to create many RequiredDocumentConfigs.
     */
    data: RequiredDocumentConfigCreateManyInput | RequiredDocumentConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequiredDocumentConfig update
   */
  export type RequiredDocumentConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a RequiredDocumentConfig.
     */
    data: XOR<RequiredDocumentConfigUpdateInput, RequiredDocumentConfigUncheckedUpdateInput>
    /**
     * Choose, which RequiredDocumentConfig to update.
     */
    where: RequiredDocumentConfigWhereUniqueInput
  }

  /**
   * RequiredDocumentConfig updateMany
   */
  export type RequiredDocumentConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequiredDocumentConfigs.
     */
    data: XOR<RequiredDocumentConfigUpdateManyMutationInput, RequiredDocumentConfigUncheckedUpdateManyInput>
    /**
     * Filter which RequiredDocumentConfigs to update
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * Limit how many RequiredDocumentConfigs to update.
     */
    limit?: number
  }

  /**
   * RequiredDocumentConfig updateManyAndReturn
   */
  export type RequiredDocumentConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * The data used to update RequiredDocumentConfigs.
     */
    data: XOR<RequiredDocumentConfigUpdateManyMutationInput, RequiredDocumentConfigUncheckedUpdateManyInput>
    /**
     * Filter which RequiredDocumentConfigs to update
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * Limit how many RequiredDocumentConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequiredDocumentConfig upsert
   */
  export type RequiredDocumentConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the RequiredDocumentConfig to update in case it exists.
     */
    where: RequiredDocumentConfigWhereUniqueInput
    /**
     * In case the RequiredDocumentConfig found by the `where` argument doesn't exist, create a new RequiredDocumentConfig with this data.
     */
    create: XOR<RequiredDocumentConfigCreateInput, RequiredDocumentConfigUncheckedCreateInput>
    /**
     * In case the RequiredDocumentConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequiredDocumentConfigUpdateInput, RequiredDocumentConfigUncheckedUpdateInput>
  }

  /**
   * RequiredDocumentConfig delete
   */
  export type RequiredDocumentConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
    /**
     * Filter which RequiredDocumentConfig to delete.
     */
    where: RequiredDocumentConfigWhereUniqueInput
  }

  /**
   * RequiredDocumentConfig deleteMany
   */
  export type RequiredDocumentConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequiredDocumentConfigs to delete
     */
    where?: RequiredDocumentConfigWhereInput
    /**
     * Limit how many RequiredDocumentConfigs to delete.
     */
    limit?: number
  }

  /**
   * RequiredDocumentConfig without action
   */
  export type RequiredDocumentConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequiredDocumentConfig
     */
    select?: RequiredDocumentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequiredDocumentConfig
     */
    omit?: RequiredDocumentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequiredDocumentConfigInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const LoanStageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanStageScalarFieldEnum = (typeof LoanStageScalarFieldEnum)[keyof typeof LoanStageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    roleId: 'roleId',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LoanRequestScalarFieldEnum: {
    id: 'id',
    loanNumber: 'loanNumber',
    customerNumber: 'customerNumber',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    loanAmount: 'loanAmount',
    loanType: 'loanType',
    loanPurpose: 'loanPurpose',
    currentStageId: 'currentStageId',
    submittedDate: 'submittedDate',
    lastUpdatedDate: 'lastUpdatedDate',
    assignedToId: 'assignedToId',
    stageDeadline: 'stageDeadline',
    isOverdue: 'isOverdue',
    isReadyForManagerReview: 'isReadyForManagerReview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanRequestScalarFieldEnum = (typeof LoanRequestScalarFieldEnum)[keyof typeof LoanRequestScalarFieldEnum]


  export const LoanDocumentScalarFieldEnum: {
    id: 'id',
    loanRequestId: 'loanRequestId',
    name: 'name',
    status: 'status',
    notes: 'notes',
    uploadedAt: 'uploadedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanDocumentScalarFieldEnum = (typeof LoanDocumentScalarFieldEnum)[keyof typeof LoanDocumentScalarFieldEnum]


  export const LoanHistoryEntryScalarFieldEnum: {
    id: 'id',
    loanRequestId: 'loanRequestId',
    stageId: 'stageId',
    timestamp: 'timestamp',
    userId: 'userId',
    userName: 'userName',
    notes: 'notes',
    requiredFulfilment: 'requiredFulfilment',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type LoanHistoryEntryScalarFieldEnum = (typeof LoanHistoryEntryScalarFieldEnum)[keyof typeof LoanHistoryEntryScalarFieldEnum]


  export const StageConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    loanStageId: 'loanStageId',
    defaultTimelineDays: 'defaultTimelineDays',
    targetRoleId: 'targetRoleId',
    percentageWeight: 'percentageWeight',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StageConfigScalarFieldEnum = (typeof StageConfigScalarFieldEnum)[keyof typeof StageConfigScalarFieldEnum]


  export const RequiredDocumentConfigScalarFieldEnum: {
    id: 'id',
    stageConfigId: 'stageConfigId',
    name: 'name',
    isMandatory: 'isMandatory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequiredDocumentConfigScalarFieldEnum = (typeof RequiredDocumentConfigScalarFieldEnum)[keyof typeof RequiredDocumentConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
    stageConfigs?: StageConfigListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    stageConfigs?: StageConfigOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
    stageConfigs?: StageConfigListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type LoanStageWhereInput = {
    AND?: LoanStageWhereInput | LoanStageWhereInput[]
    OR?: LoanStageWhereInput[]
    NOT?: LoanStageWhereInput | LoanStageWhereInput[]
    id?: StringFilter<"LoanStage"> | string
    name?: StringFilter<"LoanStage"> | string
    description?: StringNullableFilter<"LoanStage"> | string | null
    order?: IntNullableFilter<"LoanStage"> | number | null
    createdAt?: DateTimeFilter<"LoanStage"> | Date | string
    updatedAt?: DateTimeFilter<"LoanStage"> | Date | string
    loanRequests?: LoanRequestListRelationFilter
    historyEntries?: LoanHistoryEntryListRelationFilter
    stageConfigs?: StageConfigListRelationFilter
  }

  export type LoanStageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loanRequests?: LoanRequestOrderByRelationAggregateInput
    historyEntries?: LoanHistoryEntryOrderByRelationAggregateInput
    stageConfigs?: StageConfigOrderByRelationAggregateInput
  }

  export type LoanStageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LoanStageWhereInput | LoanStageWhereInput[]
    OR?: LoanStageWhereInput[]
    NOT?: LoanStageWhereInput | LoanStageWhereInput[]
    description?: StringNullableFilter<"LoanStage"> | string | null
    order?: IntNullableFilter<"LoanStage"> | number | null
    createdAt?: DateTimeFilter<"LoanStage"> | Date | string
    updatedAt?: DateTimeFilter<"LoanStage"> | Date | string
    loanRequests?: LoanRequestListRelationFilter
    historyEntries?: LoanHistoryEntryListRelationFilter
    stageConfigs?: StageConfigListRelationFilter
  }, "id" | "name">

  export type LoanStageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanStageCountOrderByAggregateInput
    _avg?: LoanStageAvgOrderByAggregateInput
    _max?: LoanStageMaxOrderByAggregateInput
    _min?: LoanStageMinOrderByAggregateInput
    _sum?: LoanStageSumOrderByAggregateInput
  }

  export type LoanStageScalarWhereWithAggregatesInput = {
    AND?: LoanStageScalarWhereWithAggregatesInput | LoanStageScalarWhereWithAggregatesInput[]
    OR?: LoanStageScalarWhereWithAggregatesInput[]
    NOT?: LoanStageScalarWhereWithAggregatesInput | LoanStageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanStage"> | string
    name?: StringWithAggregatesFilter<"LoanStage"> | string
    description?: StringNullableWithAggregatesFilter<"LoanStage"> | string | null
    order?: IntNullableWithAggregatesFilter<"LoanStage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LoanStage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanStage"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    roleId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    assignedLoans?: LoanRequestListRelationFilter
    historyEntries?: LoanHistoryEntryListRelationFilter
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    assignedLoans?: LoanRequestOrderByRelationAggregateInput
    historyEntries?: LoanHistoryEntryOrderByRelationAggregateInput
    manager?: UserOrderByWithRelationInput
    subordinates?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    roleId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    assignedLoans?: LoanRequestListRelationFilter
    historyEntries?: LoanHistoryEntryListRelationFilter
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LoanRequestWhereInput = {
    AND?: LoanRequestWhereInput | LoanRequestWhereInput[]
    OR?: LoanRequestWhereInput[]
    NOT?: LoanRequestWhereInput | LoanRequestWhereInput[]
    id?: StringFilter<"LoanRequest"> | string
    loanNumber?: StringFilter<"LoanRequest"> | string
    customerNumber?: StringFilter<"LoanRequest"> | string
    customerName?: StringFilter<"LoanRequest"> | string
    customerEmail?: StringFilter<"LoanRequest"> | string
    customerPhone?: StringFilter<"LoanRequest"> | string
    loanAmount?: DecimalFilter<"LoanRequest"> | Decimal | DecimalJsLike | number | string
    loanType?: StringFilter<"LoanRequest"> | string
    loanPurpose?: StringFilter<"LoanRequest"> | string
    currentStageId?: StringNullableFilter<"LoanRequest"> | string | null
    submittedDate?: DateTimeFilter<"LoanRequest"> | Date | string
    lastUpdatedDate?: DateTimeFilter<"LoanRequest"> | Date | string
    assignedToId?: StringNullableFilter<"LoanRequest"> | string | null
    stageDeadline?: DateTimeNullableFilter<"LoanRequest"> | Date | string | null
    isOverdue?: BoolFilter<"LoanRequest"> | boolean
    isReadyForManagerReview?: BoolFilter<"LoanRequest"> | boolean
    createdAt?: DateTimeFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LoanRequest"> | Date | string
    currentStage?: XOR<LoanStageNullableScalarRelationFilter, LoanStageWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    documents?: LoanDocumentListRelationFilter
    history?: LoanHistoryEntryListRelationFilter
  }

  export type LoanRequestOrderByWithRelationInput = {
    id?: SortOrder
    loanNumber?: SortOrder
    customerNumber?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    loanAmount?: SortOrder
    loanType?: SortOrder
    loanPurpose?: SortOrder
    currentStageId?: SortOrderInput | SortOrder
    submittedDate?: SortOrder
    lastUpdatedDate?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    stageDeadline?: SortOrderInput | SortOrder
    isOverdue?: SortOrder
    isReadyForManagerReview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currentStage?: LoanStageOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    documents?: LoanDocumentOrderByRelationAggregateInput
    history?: LoanHistoryEntryOrderByRelationAggregateInput
  }

  export type LoanRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    loanNumber?: string
    customerNumber?: string
    AND?: LoanRequestWhereInput | LoanRequestWhereInput[]
    OR?: LoanRequestWhereInput[]
    NOT?: LoanRequestWhereInput | LoanRequestWhereInput[]
    customerName?: StringFilter<"LoanRequest"> | string
    customerEmail?: StringFilter<"LoanRequest"> | string
    customerPhone?: StringFilter<"LoanRequest"> | string
    loanAmount?: DecimalFilter<"LoanRequest"> | Decimal | DecimalJsLike | number | string
    loanType?: StringFilter<"LoanRequest"> | string
    loanPurpose?: StringFilter<"LoanRequest"> | string
    currentStageId?: StringNullableFilter<"LoanRequest"> | string | null
    submittedDate?: DateTimeFilter<"LoanRequest"> | Date | string
    lastUpdatedDate?: DateTimeFilter<"LoanRequest"> | Date | string
    assignedToId?: StringNullableFilter<"LoanRequest"> | string | null
    stageDeadline?: DateTimeNullableFilter<"LoanRequest"> | Date | string | null
    isOverdue?: BoolFilter<"LoanRequest"> | boolean
    isReadyForManagerReview?: BoolFilter<"LoanRequest"> | boolean
    createdAt?: DateTimeFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LoanRequest"> | Date | string
    currentStage?: XOR<LoanStageNullableScalarRelationFilter, LoanStageWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    documents?: LoanDocumentListRelationFilter
    history?: LoanHistoryEntryListRelationFilter
  }, "id" | "loanNumber" | "customerNumber">

  export type LoanRequestOrderByWithAggregationInput = {
    id?: SortOrder
    loanNumber?: SortOrder
    customerNumber?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    loanAmount?: SortOrder
    loanType?: SortOrder
    loanPurpose?: SortOrder
    currentStageId?: SortOrderInput | SortOrder
    submittedDate?: SortOrder
    lastUpdatedDate?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    stageDeadline?: SortOrderInput | SortOrder
    isOverdue?: SortOrder
    isReadyForManagerReview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanRequestCountOrderByAggregateInput
    _avg?: LoanRequestAvgOrderByAggregateInput
    _max?: LoanRequestMaxOrderByAggregateInput
    _min?: LoanRequestMinOrderByAggregateInput
    _sum?: LoanRequestSumOrderByAggregateInput
  }

  export type LoanRequestScalarWhereWithAggregatesInput = {
    AND?: LoanRequestScalarWhereWithAggregatesInput | LoanRequestScalarWhereWithAggregatesInput[]
    OR?: LoanRequestScalarWhereWithAggregatesInput[]
    NOT?: LoanRequestScalarWhereWithAggregatesInput | LoanRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanRequest"> | string
    loanNumber?: StringWithAggregatesFilter<"LoanRequest"> | string
    customerNumber?: StringWithAggregatesFilter<"LoanRequest"> | string
    customerName?: StringWithAggregatesFilter<"LoanRequest"> | string
    customerEmail?: StringWithAggregatesFilter<"LoanRequest"> | string
    customerPhone?: StringWithAggregatesFilter<"LoanRequest"> | string
    loanAmount?: DecimalWithAggregatesFilter<"LoanRequest"> | Decimal | DecimalJsLike | number | string
    loanType?: StringWithAggregatesFilter<"LoanRequest"> | string
    loanPurpose?: StringWithAggregatesFilter<"LoanRequest"> | string
    currentStageId?: StringNullableWithAggregatesFilter<"LoanRequest"> | string | null
    submittedDate?: DateTimeWithAggregatesFilter<"LoanRequest"> | Date | string
    lastUpdatedDate?: DateTimeWithAggregatesFilter<"LoanRequest"> | Date | string
    assignedToId?: StringNullableWithAggregatesFilter<"LoanRequest"> | string | null
    stageDeadline?: DateTimeNullableWithAggregatesFilter<"LoanRequest"> | Date | string | null
    isOverdue?: BoolWithAggregatesFilter<"LoanRequest"> | boolean
    isReadyForManagerReview?: BoolWithAggregatesFilter<"LoanRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanRequest"> | Date | string
  }

  export type LoanDocumentWhereInput = {
    AND?: LoanDocumentWhereInput | LoanDocumentWhereInput[]
    OR?: LoanDocumentWhereInput[]
    NOT?: LoanDocumentWhereInput | LoanDocumentWhereInput[]
    id?: StringFilter<"LoanDocument"> | string
    loanRequestId?: StringFilter<"LoanDocument"> | string
    name?: StringFilter<"LoanDocument"> | string
    status?: StringFilter<"LoanDocument"> | string
    notes?: StringNullableFilter<"LoanDocument"> | string | null
    uploadedAt?: DateTimeFilter<"LoanDocument"> | Date | string
    createdAt?: DateTimeFilter<"LoanDocument"> | Date | string
    updatedAt?: DateTimeFilter<"LoanDocument"> | Date | string
    loanRequest?: XOR<LoanRequestScalarRelationFilter, LoanRequestWhereInput>
  }

  export type LoanDocumentOrderByWithRelationInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loanRequest?: LoanRequestOrderByWithRelationInput
  }

  export type LoanDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanDocumentWhereInput | LoanDocumentWhereInput[]
    OR?: LoanDocumentWhereInput[]
    NOT?: LoanDocumentWhereInput | LoanDocumentWhereInput[]
    loanRequestId?: StringFilter<"LoanDocument"> | string
    name?: StringFilter<"LoanDocument"> | string
    status?: StringFilter<"LoanDocument"> | string
    notes?: StringNullableFilter<"LoanDocument"> | string | null
    uploadedAt?: DateTimeFilter<"LoanDocument"> | Date | string
    createdAt?: DateTimeFilter<"LoanDocument"> | Date | string
    updatedAt?: DateTimeFilter<"LoanDocument"> | Date | string
    loanRequest?: XOR<LoanRequestScalarRelationFilter, LoanRequestWhereInput>
  }, "id">

  export type LoanDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanDocumentCountOrderByAggregateInput
    _max?: LoanDocumentMaxOrderByAggregateInput
    _min?: LoanDocumentMinOrderByAggregateInput
  }

  export type LoanDocumentScalarWhereWithAggregatesInput = {
    AND?: LoanDocumentScalarWhereWithAggregatesInput | LoanDocumentScalarWhereWithAggregatesInput[]
    OR?: LoanDocumentScalarWhereWithAggregatesInput[]
    NOT?: LoanDocumentScalarWhereWithAggregatesInput | LoanDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanDocument"> | string
    loanRequestId?: StringWithAggregatesFilter<"LoanDocument"> | string
    name?: StringWithAggregatesFilter<"LoanDocument"> | string
    status?: StringWithAggregatesFilter<"LoanDocument"> | string
    notes?: StringNullableWithAggregatesFilter<"LoanDocument"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"LoanDocument"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LoanDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanDocument"> | Date | string
  }

  export type LoanHistoryEntryWhereInput = {
    AND?: LoanHistoryEntryWhereInput | LoanHistoryEntryWhereInput[]
    OR?: LoanHistoryEntryWhereInput[]
    NOT?: LoanHistoryEntryWhereInput | LoanHistoryEntryWhereInput[]
    id?: StringFilter<"LoanHistoryEntry"> | string
    loanRequestId?: StringFilter<"LoanHistoryEntry"> | string
    stageId?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    timestamp?: DateTimeFilter<"LoanHistoryEntry"> | Date | string
    userId?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    userName?: StringFilter<"LoanHistoryEntry"> | string
    notes?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    requiredFulfilment?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    ipAddress?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    createdAt?: DateTimeFilter<"LoanHistoryEntry"> | Date | string
    loanRequest?: XOR<LoanRequestScalarRelationFilter, LoanRequestWhereInput>
    stage?: XOR<LoanStageNullableScalarRelationFilter, LoanStageWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LoanHistoryEntryOrderByWithRelationInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    stageId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrder
    notes?: SortOrderInput | SortOrder
    requiredFulfilment?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    loanRequest?: LoanRequestOrderByWithRelationInput
    stage?: LoanStageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LoanHistoryEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanHistoryEntryWhereInput | LoanHistoryEntryWhereInput[]
    OR?: LoanHistoryEntryWhereInput[]
    NOT?: LoanHistoryEntryWhereInput | LoanHistoryEntryWhereInput[]
    loanRequestId?: StringFilter<"LoanHistoryEntry"> | string
    stageId?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    timestamp?: DateTimeFilter<"LoanHistoryEntry"> | Date | string
    userId?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    userName?: StringFilter<"LoanHistoryEntry"> | string
    notes?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    requiredFulfilment?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    ipAddress?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    createdAt?: DateTimeFilter<"LoanHistoryEntry"> | Date | string
    loanRequest?: XOR<LoanRequestScalarRelationFilter, LoanRequestWhereInput>
    stage?: XOR<LoanStageNullableScalarRelationFilter, LoanStageWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LoanHistoryEntryOrderByWithAggregationInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    stageId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrder
    notes?: SortOrderInput | SortOrder
    requiredFulfilment?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LoanHistoryEntryCountOrderByAggregateInput
    _max?: LoanHistoryEntryMaxOrderByAggregateInput
    _min?: LoanHistoryEntryMinOrderByAggregateInput
  }

  export type LoanHistoryEntryScalarWhereWithAggregatesInput = {
    AND?: LoanHistoryEntryScalarWhereWithAggregatesInput | LoanHistoryEntryScalarWhereWithAggregatesInput[]
    OR?: LoanHistoryEntryScalarWhereWithAggregatesInput[]
    NOT?: LoanHistoryEntryScalarWhereWithAggregatesInput | LoanHistoryEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanHistoryEntry"> | string
    loanRequestId?: StringWithAggregatesFilter<"LoanHistoryEntry"> | string
    stageId?: StringNullableWithAggregatesFilter<"LoanHistoryEntry"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"LoanHistoryEntry"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"LoanHistoryEntry"> | string | null
    userName?: StringWithAggregatesFilter<"LoanHistoryEntry"> | string
    notes?: StringNullableWithAggregatesFilter<"LoanHistoryEntry"> | string | null
    requiredFulfilment?: StringNullableWithAggregatesFilter<"LoanHistoryEntry"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"LoanHistoryEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LoanHistoryEntry"> | Date | string
  }

  export type StageConfigWhereInput = {
    AND?: StageConfigWhereInput | StageConfigWhereInput[]
    OR?: StageConfigWhereInput[]
    NOT?: StageConfigWhereInput | StageConfigWhereInput[]
    id?: StringFilter<"StageConfig"> | string
    name?: StringFilter<"StageConfig"> | string
    loanStageId?: StringNullableFilter<"StageConfig"> | string | null
    defaultTimelineDays?: IntFilter<"StageConfig"> | number
    targetRoleId?: StringNullableFilter<"StageConfig"> | string | null
    percentageWeight?: IntFilter<"StageConfig"> | number
    createdAt?: DateTimeFilter<"StageConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StageConfig"> | Date | string
    loanStage?: XOR<LoanStageNullableScalarRelationFilter, LoanStageWhereInput> | null
    targetRole?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    requiredDocuments?: RequiredDocumentConfigListRelationFilter
  }

  export type StageConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    loanStageId?: SortOrderInput | SortOrder
    defaultTimelineDays?: SortOrder
    targetRoleId?: SortOrderInput | SortOrder
    percentageWeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loanStage?: LoanStageOrderByWithRelationInput
    targetRole?: RoleOrderByWithRelationInput
    requiredDocuments?: RequiredDocumentConfigOrderByRelationAggregateInput
  }

  export type StageConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StageConfigWhereInput | StageConfigWhereInput[]
    OR?: StageConfigWhereInput[]
    NOT?: StageConfigWhereInput | StageConfigWhereInput[]
    name?: StringFilter<"StageConfig"> | string
    loanStageId?: StringNullableFilter<"StageConfig"> | string | null
    defaultTimelineDays?: IntFilter<"StageConfig"> | number
    targetRoleId?: StringNullableFilter<"StageConfig"> | string | null
    percentageWeight?: IntFilter<"StageConfig"> | number
    createdAt?: DateTimeFilter<"StageConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StageConfig"> | Date | string
    loanStage?: XOR<LoanStageNullableScalarRelationFilter, LoanStageWhereInput> | null
    targetRole?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    requiredDocuments?: RequiredDocumentConfigListRelationFilter
  }, "id">

  export type StageConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    loanStageId?: SortOrderInput | SortOrder
    defaultTimelineDays?: SortOrder
    targetRoleId?: SortOrderInput | SortOrder
    percentageWeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StageConfigCountOrderByAggregateInput
    _avg?: StageConfigAvgOrderByAggregateInput
    _max?: StageConfigMaxOrderByAggregateInput
    _min?: StageConfigMinOrderByAggregateInput
    _sum?: StageConfigSumOrderByAggregateInput
  }

  export type StageConfigScalarWhereWithAggregatesInput = {
    AND?: StageConfigScalarWhereWithAggregatesInput | StageConfigScalarWhereWithAggregatesInput[]
    OR?: StageConfigScalarWhereWithAggregatesInput[]
    NOT?: StageConfigScalarWhereWithAggregatesInput | StageConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StageConfig"> | string
    name?: StringWithAggregatesFilter<"StageConfig"> | string
    loanStageId?: StringNullableWithAggregatesFilter<"StageConfig"> | string | null
    defaultTimelineDays?: IntWithAggregatesFilter<"StageConfig"> | number
    targetRoleId?: StringNullableWithAggregatesFilter<"StageConfig"> | string | null
    percentageWeight?: IntWithAggregatesFilter<"StageConfig"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StageConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StageConfig"> | Date | string
  }

  export type RequiredDocumentConfigWhereInput = {
    AND?: RequiredDocumentConfigWhereInput | RequiredDocumentConfigWhereInput[]
    OR?: RequiredDocumentConfigWhereInput[]
    NOT?: RequiredDocumentConfigWhereInput | RequiredDocumentConfigWhereInput[]
    id?: StringFilter<"RequiredDocumentConfig"> | string
    stageConfigId?: StringFilter<"RequiredDocumentConfig"> | string
    name?: StringFilter<"RequiredDocumentConfig"> | string
    isMandatory?: BoolFilter<"RequiredDocumentConfig"> | boolean
    createdAt?: DateTimeFilter<"RequiredDocumentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"RequiredDocumentConfig"> | Date | string
    stageConfig?: XOR<StageConfigScalarRelationFilter, StageConfigWhereInput>
  }

  export type RequiredDocumentConfigOrderByWithRelationInput = {
    id?: SortOrder
    stageConfigId?: SortOrder
    name?: SortOrder
    isMandatory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stageConfig?: StageConfigOrderByWithRelationInput
  }

  export type RequiredDocumentConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequiredDocumentConfigWhereInput | RequiredDocumentConfigWhereInput[]
    OR?: RequiredDocumentConfigWhereInput[]
    NOT?: RequiredDocumentConfigWhereInput | RequiredDocumentConfigWhereInput[]
    stageConfigId?: StringFilter<"RequiredDocumentConfig"> | string
    name?: StringFilter<"RequiredDocumentConfig"> | string
    isMandatory?: BoolFilter<"RequiredDocumentConfig"> | boolean
    createdAt?: DateTimeFilter<"RequiredDocumentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"RequiredDocumentConfig"> | Date | string
    stageConfig?: XOR<StageConfigScalarRelationFilter, StageConfigWhereInput>
  }, "id">

  export type RequiredDocumentConfigOrderByWithAggregationInput = {
    id?: SortOrder
    stageConfigId?: SortOrder
    name?: SortOrder
    isMandatory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequiredDocumentConfigCountOrderByAggregateInput
    _max?: RequiredDocumentConfigMaxOrderByAggregateInput
    _min?: RequiredDocumentConfigMinOrderByAggregateInput
  }

  export type RequiredDocumentConfigScalarWhereWithAggregatesInput = {
    AND?: RequiredDocumentConfigScalarWhereWithAggregatesInput | RequiredDocumentConfigScalarWhereWithAggregatesInput[]
    OR?: RequiredDocumentConfigScalarWhereWithAggregatesInput[]
    NOT?: RequiredDocumentConfigScalarWhereWithAggregatesInput | RequiredDocumentConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequiredDocumentConfig"> | string
    stageConfigId?: StringWithAggregatesFilter<"RequiredDocumentConfig"> | string
    name?: StringWithAggregatesFilter<"RequiredDocumentConfig"> | string
    isMandatory?: BoolWithAggregatesFilter<"RequiredDocumentConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RequiredDocumentConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequiredDocumentConfig"> | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
    stageConfigs?: StageConfigCreateNestedManyWithoutTargetRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    stageConfigs?: StageConfigUncheckedCreateNestedManyWithoutTargetRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
    stageConfigs?: StageConfigUpdateManyWithoutTargetRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    stageConfigs?: StageConfigUncheckedUpdateManyWithoutTargetRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStageCreateInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestCreateNestedManyWithoutCurrentStageInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutStageInput
    stageConfigs?: StageConfigCreateNestedManyWithoutLoanStageInput
  }

  export type LoanStageUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestUncheckedCreateNestedManyWithoutCurrentStageInput
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutStageInput
    stageConfigs?: StageConfigUncheckedCreateNestedManyWithoutLoanStageInput
  }

  export type LoanStageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUpdateManyWithoutCurrentStageNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutStageNestedInput
    stageConfigs?: StageConfigUpdateManyWithoutLoanStageNestedInput
  }

  export type LoanStageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUncheckedUpdateManyWithoutCurrentStageNestedInput
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutStageNestedInput
    stageConfigs?: StageConfigUncheckedUpdateManyWithoutLoanStageNestedInput
  }

  export type LoanStageCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanStageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanStageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    assignedLoans?: LoanRequestCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutUserInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLoans?: LoanRequestUncheckedCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutUserInput
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    assignedLoans?: LoanRequestUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutUserNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLoans?: LoanRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestCreateInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentStage?: LoanStageCreateNestedOneWithoutLoanRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedLoansInput
    documents?: LoanDocumentCreateNestedManyWithoutLoanRequestInput
    history?: LoanHistoryEntryCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    currentStageId?: string | null
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    assignedToId?: string | null
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: LoanDocumentUncheckedCreateNestedManyWithoutLoanRequestInput
    history?: LoanHistoryEntryUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStage?: LoanStageUpdateOneWithoutLoanRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedLoansNestedInput
    documents?: LoanDocumentUpdateManyWithoutLoanRequestNestedInput
    history?: LoanHistoryEntryUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    currentStageId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: LoanDocumentUncheckedUpdateManyWithoutLoanRequestNestedInput
    history?: LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestCreateManyInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    currentStageId?: string | null
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    assignedToId?: string | null
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    currentStageId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanDocumentCreateInput = {
    id?: string
    name: string
    status: string
    notes?: string | null
    uploadedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequest: LoanRequestCreateNestedOneWithoutDocumentsInput
  }

  export type LoanDocumentUncheckedCreateInput = {
    id?: string
    loanRequestId: string
    name: string
    status: string
    notes?: string | null
    uploadedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequest?: LoanRequestUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type LoanDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanDocumentCreateManyInput = {
    id?: string
    loanRequestId: string
    name: string
    status: string
    notes?: string | null
    uploadedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryCreateInput = {
    id?: string
    timestamp: Date | string
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    loanRequest: LoanRequestCreateNestedOneWithoutHistoryInput
    stage?: LoanStageCreateNestedOneWithoutHistoryEntriesInput
    user?: UserCreateNestedOneWithoutHistoryEntriesInput
  }

  export type LoanHistoryEntryUncheckedCreateInput = {
    id?: string
    loanRequestId: string
    stageId?: string | null
    timestamp: Date | string
    userId?: string | null
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type LoanHistoryEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequest?: LoanRequestUpdateOneRequiredWithoutHistoryNestedInput
    stage?: LoanStageUpdateOneWithoutHistoryEntriesNestedInput
    user?: UserUpdateOneWithoutHistoryEntriesNestedInput
  }

  export type LoanHistoryEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryCreateManyInput = {
    id?: string
    loanRequestId: string
    stageId?: string | null
    timestamp: Date | string
    userId?: string | null
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type LoanHistoryEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageConfigCreateInput = {
    id?: string
    name: string
    defaultTimelineDays: number
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loanStage?: LoanStageCreateNestedOneWithoutStageConfigsInput
    targetRole?: RoleCreateNestedOneWithoutStageConfigsInput
    requiredDocuments?: RequiredDocumentConfigCreateNestedManyWithoutStageConfigInput
  }

  export type StageConfigUncheckedCreateInput = {
    id?: string
    name: string
    loanStageId?: string | null
    defaultTimelineDays: number
    targetRoleId?: string | null
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredDocuments?: RequiredDocumentConfigUncheckedCreateNestedManyWithoutStageConfigInput
  }

  export type StageConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanStage?: LoanStageUpdateOneWithoutStageConfigsNestedInput
    targetRole?: RoleUpdateOneWithoutStageConfigsNestedInput
    requiredDocuments?: RequiredDocumentConfigUpdateManyWithoutStageConfigNestedInput
  }

  export type StageConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    loanStageId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    targetRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredDocuments?: RequiredDocumentConfigUncheckedUpdateManyWithoutStageConfigNestedInput
  }

  export type StageConfigCreateManyInput = {
    id?: string
    name: string
    loanStageId?: string | null
    defaultTimelineDays: number
    targetRoleId?: string | null
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    loanStageId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    targetRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredDocumentConfigCreateInput = {
    id?: string
    name: string
    isMandatory?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stageConfig: StageConfigCreateNestedOneWithoutRequiredDocumentsInput
  }

  export type RequiredDocumentConfigUncheckedCreateInput = {
    id?: string
    stageConfigId: string
    name: string
    isMandatory?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequiredDocumentConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stageConfig?: StageConfigUpdateOneRequiredWithoutRequiredDocumentsNestedInput
  }

  export type RequiredDocumentConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageConfigId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredDocumentConfigCreateManyInput = {
    id?: string
    stageConfigId: string
    name: string
    isMandatory?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequiredDocumentConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredDocumentConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageConfigId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type StageConfigListRelationFilter = {
    every?: StageConfigWhereInput
    some?: StageConfigWhereInput
    none?: StageConfigWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StageConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LoanRequestListRelationFilter = {
    every?: LoanRequestWhereInput
    some?: LoanRequestWhereInput
    none?: LoanRequestWhereInput
  }

  export type LoanHistoryEntryListRelationFilter = {
    every?: LoanHistoryEntryWhereInput
    some?: LoanHistoryEntryWhereInput
    none?: LoanHistoryEntryWhereInput
  }

  export type LoanRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanHistoryEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanStageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanStageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LoanStageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanStageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanStageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LoanStageNullableScalarRelationFilter = {
    is?: LoanStageWhereInput | null
    isNot?: LoanStageWhereInput | null
  }

  export type LoanDocumentListRelationFilter = {
    every?: LoanDocumentWhereInput
    some?: LoanDocumentWhereInput
    none?: LoanDocumentWhereInput
  }

  export type LoanDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanRequestCountOrderByAggregateInput = {
    id?: SortOrder
    loanNumber?: SortOrder
    customerNumber?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    loanAmount?: SortOrder
    loanType?: SortOrder
    loanPurpose?: SortOrder
    currentStageId?: SortOrder
    submittedDate?: SortOrder
    lastUpdatedDate?: SortOrder
    assignedToId?: SortOrder
    stageDeadline?: SortOrder
    isOverdue?: SortOrder
    isReadyForManagerReview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanRequestAvgOrderByAggregateInput = {
    loanAmount?: SortOrder
  }

  export type LoanRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    loanNumber?: SortOrder
    customerNumber?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    loanAmount?: SortOrder
    loanType?: SortOrder
    loanPurpose?: SortOrder
    currentStageId?: SortOrder
    submittedDate?: SortOrder
    lastUpdatedDate?: SortOrder
    assignedToId?: SortOrder
    stageDeadline?: SortOrder
    isOverdue?: SortOrder
    isReadyForManagerReview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanRequestMinOrderByAggregateInput = {
    id?: SortOrder
    loanNumber?: SortOrder
    customerNumber?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    loanAmount?: SortOrder
    loanType?: SortOrder
    loanPurpose?: SortOrder
    currentStageId?: SortOrder
    submittedDate?: SortOrder
    lastUpdatedDate?: SortOrder
    assignedToId?: SortOrder
    stageDeadline?: SortOrder
    isOverdue?: SortOrder
    isReadyForManagerReview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanRequestSumOrderByAggregateInput = {
    loanAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LoanRequestScalarRelationFilter = {
    is?: LoanRequestWhereInput
    isNot?: LoanRequestWhereInput
  }

  export type LoanDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    uploadedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    uploadedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    uploadedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanHistoryEntryCountOrderByAggregateInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    stageId?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    notes?: SortOrder
    requiredFulfilment?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type LoanHistoryEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    stageId?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    notes?: SortOrder
    requiredFulfilment?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type LoanHistoryEntryMinOrderByAggregateInput = {
    id?: SortOrder
    loanRequestId?: SortOrder
    stageId?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    notes?: SortOrder
    requiredFulfilment?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RequiredDocumentConfigListRelationFilter = {
    every?: RequiredDocumentConfigWhereInput
    some?: RequiredDocumentConfigWhereInput
    none?: RequiredDocumentConfigWhereInput
  }

  export type RequiredDocumentConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StageConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    loanStageId?: SortOrder
    defaultTimelineDays?: SortOrder
    targetRoleId?: SortOrder
    percentageWeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageConfigAvgOrderByAggregateInput = {
    defaultTimelineDays?: SortOrder
    percentageWeight?: SortOrder
  }

  export type StageConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    loanStageId?: SortOrder
    defaultTimelineDays?: SortOrder
    targetRoleId?: SortOrder
    percentageWeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    loanStageId?: SortOrder
    defaultTimelineDays?: SortOrder
    targetRoleId?: SortOrder
    percentageWeight?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StageConfigSumOrderByAggregateInput = {
    defaultTimelineDays?: SortOrder
    percentageWeight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StageConfigScalarRelationFilter = {
    is?: StageConfigWhereInput
    isNot?: StageConfigWhereInput
  }

  export type RequiredDocumentConfigCountOrderByAggregateInput = {
    id?: SortOrder
    stageConfigId?: SortOrder
    name?: SortOrder
    isMandatory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequiredDocumentConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    stageConfigId?: SortOrder
    name?: SortOrder
    isMandatory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequiredDocumentConfigMinOrderByAggregateInput = {
    id?: SortOrder
    stageConfigId?: SortOrder
    name?: SortOrder
    isMandatory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StageConfigCreateNestedManyWithoutTargetRoleInput = {
    create?: XOR<StageConfigCreateWithoutTargetRoleInput, StageConfigUncheckedCreateWithoutTargetRoleInput> | StageConfigCreateWithoutTargetRoleInput[] | StageConfigUncheckedCreateWithoutTargetRoleInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutTargetRoleInput | StageConfigCreateOrConnectWithoutTargetRoleInput[]
    createMany?: StageConfigCreateManyTargetRoleInputEnvelope
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StageConfigUncheckedCreateNestedManyWithoutTargetRoleInput = {
    create?: XOR<StageConfigCreateWithoutTargetRoleInput, StageConfigUncheckedCreateWithoutTargetRoleInput> | StageConfigCreateWithoutTargetRoleInput[] | StageConfigUncheckedCreateWithoutTargetRoleInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutTargetRoleInput | StageConfigCreateOrConnectWithoutTargetRoleInput[]
    createMany?: StageConfigCreateManyTargetRoleInputEnvelope
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StageConfigUpdateManyWithoutTargetRoleNestedInput = {
    create?: XOR<StageConfigCreateWithoutTargetRoleInput, StageConfigUncheckedCreateWithoutTargetRoleInput> | StageConfigCreateWithoutTargetRoleInput[] | StageConfigUncheckedCreateWithoutTargetRoleInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutTargetRoleInput | StageConfigCreateOrConnectWithoutTargetRoleInput[]
    upsert?: StageConfigUpsertWithWhereUniqueWithoutTargetRoleInput | StageConfigUpsertWithWhereUniqueWithoutTargetRoleInput[]
    createMany?: StageConfigCreateManyTargetRoleInputEnvelope
    set?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    disconnect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    delete?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    update?: StageConfigUpdateWithWhereUniqueWithoutTargetRoleInput | StageConfigUpdateWithWhereUniqueWithoutTargetRoleInput[]
    updateMany?: StageConfigUpdateManyWithWhereWithoutTargetRoleInput | StageConfigUpdateManyWithWhereWithoutTargetRoleInput[]
    deleteMany?: StageConfigScalarWhereInput | StageConfigScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StageConfigUncheckedUpdateManyWithoutTargetRoleNestedInput = {
    create?: XOR<StageConfigCreateWithoutTargetRoleInput, StageConfigUncheckedCreateWithoutTargetRoleInput> | StageConfigCreateWithoutTargetRoleInput[] | StageConfigUncheckedCreateWithoutTargetRoleInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutTargetRoleInput | StageConfigCreateOrConnectWithoutTargetRoleInput[]
    upsert?: StageConfigUpsertWithWhereUniqueWithoutTargetRoleInput | StageConfigUpsertWithWhereUniqueWithoutTargetRoleInput[]
    createMany?: StageConfigCreateManyTargetRoleInputEnvelope
    set?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    disconnect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    delete?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    update?: StageConfigUpdateWithWhereUniqueWithoutTargetRoleInput | StageConfigUpdateWithWhereUniqueWithoutTargetRoleInput[]
    updateMany?: StageConfigUpdateManyWithWhereWithoutTargetRoleInput | StageConfigUpdateManyWithWhereWithoutTargetRoleInput[]
    deleteMany?: StageConfigScalarWhereInput | StageConfigScalarWhereInput[]
  }

  export type LoanRequestCreateNestedManyWithoutCurrentStageInput = {
    create?: XOR<LoanRequestCreateWithoutCurrentStageInput, LoanRequestUncheckedCreateWithoutCurrentStageInput> | LoanRequestCreateWithoutCurrentStageInput[] | LoanRequestUncheckedCreateWithoutCurrentStageInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutCurrentStageInput | LoanRequestCreateOrConnectWithoutCurrentStageInput[]
    createMany?: LoanRequestCreateManyCurrentStageInputEnvelope
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
  }

  export type LoanHistoryEntryCreateNestedManyWithoutStageInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutStageInput, LoanHistoryEntryUncheckedCreateWithoutStageInput> | LoanHistoryEntryCreateWithoutStageInput[] | LoanHistoryEntryUncheckedCreateWithoutStageInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutStageInput | LoanHistoryEntryCreateOrConnectWithoutStageInput[]
    createMany?: LoanHistoryEntryCreateManyStageInputEnvelope
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
  }

  export type StageConfigCreateNestedManyWithoutLoanStageInput = {
    create?: XOR<StageConfigCreateWithoutLoanStageInput, StageConfigUncheckedCreateWithoutLoanStageInput> | StageConfigCreateWithoutLoanStageInput[] | StageConfigUncheckedCreateWithoutLoanStageInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutLoanStageInput | StageConfigCreateOrConnectWithoutLoanStageInput[]
    createMany?: StageConfigCreateManyLoanStageInputEnvelope
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
  }

  export type LoanRequestUncheckedCreateNestedManyWithoutCurrentStageInput = {
    create?: XOR<LoanRequestCreateWithoutCurrentStageInput, LoanRequestUncheckedCreateWithoutCurrentStageInput> | LoanRequestCreateWithoutCurrentStageInput[] | LoanRequestUncheckedCreateWithoutCurrentStageInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutCurrentStageInput | LoanRequestCreateOrConnectWithoutCurrentStageInput[]
    createMany?: LoanRequestCreateManyCurrentStageInputEnvelope
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
  }

  export type LoanHistoryEntryUncheckedCreateNestedManyWithoutStageInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutStageInput, LoanHistoryEntryUncheckedCreateWithoutStageInput> | LoanHistoryEntryCreateWithoutStageInput[] | LoanHistoryEntryUncheckedCreateWithoutStageInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutStageInput | LoanHistoryEntryCreateOrConnectWithoutStageInput[]
    createMany?: LoanHistoryEntryCreateManyStageInputEnvelope
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
  }

  export type StageConfigUncheckedCreateNestedManyWithoutLoanStageInput = {
    create?: XOR<StageConfigCreateWithoutLoanStageInput, StageConfigUncheckedCreateWithoutLoanStageInput> | StageConfigCreateWithoutLoanStageInput[] | StageConfigUncheckedCreateWithoutLoanStageInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutLoanStageInput | StageConfigCreateOrConnectWithoutLoanStageInput[]
    createMany?: StageConfigCreateManyLoanStageInputEnvelope
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LoanRequestUpdateManyWithoutCurrentStageNestedInput = {
    create?: XOR<LoanRequestCreateWithoutCurrentStageInput, LoanRequestUncheckedCreateWithoutCurrentStageInput> | LoanRequestCreateWithoutCurrentStageInput[] | LoanRequestUncheckedCreateWithoutCurrentStageInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutCurrentStageInput | LoanRequestCreateOrConnectWithoutCurrentStageInput[]
    upsert?: LoanRequestUpsertWithWhereUniqueWithoutCurrentStageInput | LoanRequestUpsertWithWhereUniqueWithoutCurrentStageInput[]
    createMany?: LoanRequestCreateManyCurrentStageInputEnvelope
    set?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    disconnect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    delete?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    update?: LoanRequestUpdateWithWhereUniqueWithoutCurrentStageInput | LoanRequestUpdateWithWhereUniqueWithoutCurrentStageInput[]
    updateMany?: LoanRequestUpdateManyWithWhereWithoutCurrentStageInput | LoanRequestUpdateManyWithWhereWithoutCurrentStageInput[]
    deleteMany?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
  }

  export type LoanHistoryEntryUpdateManyWithoutStageNestedInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutStageInput, LoanHistoryEntryUncheckedCreateWithoutStageInput> | LoanHistoryEntryCreateWithoutStageInput[] | LoanHistoryEntryUncheckedCreateWithoutStageInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutStageInput | LoanHistoryEntryCreateOrConnectWithoutStageInput[]
    upsert?: LoanHistoryEntryUpsertWithWhereUniqueWithoutStageInput | LoanHistoryEntryUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: LoanHistoryEntryCreateManyStageInputEnvelope
    set?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    disconnect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    delete?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    update?: LoanHistoryEntryUpdateWithWhereUniqueWithoutStageInput | LoanHistoryEntryUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: LoanHistoryEntryUpdateManyWithWhereWithoutStageInput | LoanHistoryEntryUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
  }

  export type StageConfigUpdateManyWithoutLoanStageNestedInput = {
    create?: XOR<StageConfigCreateWithoutLoanStageInput, StageConfigUncheckedCreateWithoutLoanStageInput> | StageConfigCreateWithoutLoanStageInput[] | StageConfigUncheckedCreateWithoutLoanStageInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutLoanStageInput | StageConfigCreateOrConnectWithoutLoanStageInput[]
    upsert?: StageConfigUpsertWithWhereUniqueWithoutLoanStageInput | StageConfigUpsertWithWhereUniqueWithoutLoanStageInput[]
    createMany?: StageConfigCreateManyLoanStageInputEnvelope
    set?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    disconnect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    delete?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    update?: StageConfigUpdateWithWhereUniqueWithoutLoanStageInput | StageConfigUpdateWithWhereUniqueWithoutLoanStageInput[]
    updateMany?: StageConfigUpdateManyWithWhereWithoutLoanStageInput | StageConfigUpdateManyWithWhereWithoutLoanStageInput[]
    deleteMany?: StageConfigScalarWhereInput | StageConfigScalarWhereInput[]
  }

  export type LoanRequestUncheckedUpdateManyWithoutCurrentStageNestedInput = {
    create?: XOR<LoanRequestCreateWithoutCurrentStageInput, LoanRequestUncheckedCreateWithoutCurrentStageInput> | LoanRequestCreateWithoutCurrentStageInput[] | LoanRequestUncheckedCreateWithoutCurrentStageInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutCurrentStageInput | LoanRequestCreateOrConnectWithoutCurrentStageInput[]
    upsert?: LoanRequestUpsertWithWhereUniqueWithoutCurrentStageInput | LoanRequestUpsertWithWhereUniqueWithoutCurrentStageInput[]
    createMany?: LoanRequestCreateManyCurrentStageInputEnvelope
    set?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    disconnect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    delete?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    update?: LoanRequestUpdateWithWhereUniqueWithoutCurrentStageInput | LoanRequestUpdateWithWhereUniqueWithoutCurrentStageInput[]
    updateMany?: LoanRequestUpdateManyWithWhereWithoutCurrentStageInput | LoanRequestUpdateManyWithWhereWithoutCurrentStageInput[]
    deleteMany?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
  }

  export type LoanHistoryEntryUncheckedUpdateManyWithoutStageNestedInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutStageInput, LoanHistoryEntryUncheckedCreateWithoutStageInput> | LoanHistoryEntryCreateWithoutStageInput[] | LoanHistoryEntryUncheckedCreateWithoutStageInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutStageInput | LoanHistoryEntryCreateOrConnectWithoutStageInput[]
    upsert?: LoanHistoryEntryUpsertWithWhereUniqueWithoutStageInput | LoanHistoryEntryUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: LoanHistoryEntryCreateManyStageInputEnvelope
    set?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    disconnect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    delete?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    update?: LoanHistoryEntryUpdateWithWhereUniqueWithoutStageInput | LoanHistoryEntryUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: LoanHistoryEntryUpdateManyWithWhereWithoutStageInput | LoanHistoryEntryUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
  }

  export type StageConfigUncheckedUpdateManyWithoutLoanStageNestedInput = {
    create?: XOR<StageConfigCreateWithoutLoanStageInput, StageConfigUncheckedCreateWithoutLoanStageInput> | StageConfigCreateWithoutLoanStageInput[] | StageConfigUncheckedCreateWithoutLoanStageInput[]
    connectOrCreate?: StageConfigCreateOrConnectWithoutLoanStageInput | StageConfigCreateOrConnectWithoutLoanStageInput[]
    upsert?: StageConfigUpsertWithWhereUniqueWithoutLoanStageInput | StageConfigUpsertWithWhereUniqueWithoutLoanStageInput[]
    createMany?: StageConfigCreateManyLoanStageInputEnvelope
    set?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    disconnect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    delete?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    connect?: StageConfigWhereUniqueInput | StageConfigWhereUniqueInput[]
    update?: StageConfigUpdateWithWhereUniqueWithoutLoanStageInput | StageConfigUpdateWithWhereUniqueWithoutLoanStageInput[]
    updateMany?: StageConfigUpdateManyWithWhereWithoutLoanStageInput | StageConfigUpdateManyWithWhereWithoutLoanStageInput[]
    deleteMany?: StageConfigScalarWhereInput | StageConfigScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type LoanRequestCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<LoanRequestCreateWithoutAssignedToInput, LoanRequestUncheckedCreateWithoutAssignedToInput> | LoanRequestCreateWithoutAssignedToInput[] | LoanRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutAssignedToInput | LoanRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: LoanRequestCreateManyAssignedToInputEnvelope
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
  }

  export type LoanHistoryEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutUserInput, LoanHistoryEntryUncheckedCreateWithoutUserInput> | LoanHistoryEntryCreateWithoutUserInput[] | LoanHistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutUserInput | LoanHistoryEntryCreateOrConnectWithoutUserInput[]
    createMany?: LoanHistoryEntryCreateManyUserInputEnvelope
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LoanRequestUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<LoanRequestCreateWithoutAssignedToInput, LoanRequestUncheckedCreateWithoutAssignedToInput> | LoanRequestCreateWithoutAssignedToInput[] | LoanRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutAssignedToInput | LoanRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: LoanRequestCreateManyAssignedToInputEnvelope
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
  }

  export type LoanHistoryEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutUserInput, LoanHistoryEntryUncheckedCreateWithoutUserInput> | LoanHistoryEntryCreateWithoutUserInput[] | LoanHistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutUserInput | LoanHistoryEntryCreateOrConnectWithoutUserInput[]
    createMany?: LoanHistoryEntryCreateManyUserInputEnvelope
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type LoanRequestUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<LoanRequestCreateWithoutAssignedToInput, LoanRequestUncheckedCreateWithoutAssignedToInput> | LoanRequestCreateWithoutAssignedToInput[] | LoanRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutAssignedToInput | LoanRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: LoanRequestUpsertWithWhereUniqueWithoutAssignedToInput | LoanRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: LoanRequestCreateManyAssignedToInputEnvelope
    set?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    disconnect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    delete?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    update?: LoanRequestUpdateWithWhereUniqueWithoutAssignedToInput | LoanRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: LoanRequestUpdateManyWithWhereWithoutAssignedToInput | LoanRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
  }

  export type LoanHistoryEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutUserInput, LoanHistoryEntryUncheckedCreateWithoutUserInput> | LoanHistoryEntryCreateWithoutUserInput[] | LoanHistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutUserInput | LoanHistoryEntryCreateOrConnectWithoutUserInput[]
    upsert?: LoanHistoryEntryUpsertWithWhereUniqueWithoutUserInput | LoanHistoryEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanHistoryEntryCreateManyUserInputEnvelope
    set?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    disconnect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    delete?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    update?: LoanHistoryEntryUpdateWithWhereUniqueWithoutUserInput | LoanHistoryEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanHistoryEntryUpdateManyWithWhereWithoutUserInput | LoanHistoryEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
  }

  export type UserUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    upsert?: UserUpsertWithoutSubordinatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubordinatesInput, UserUpdateWithoutSubordinatesInput>, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LoanRequestUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<LoanRequestCreateWithoutAssignedToInput, LoanRequestUncheckedCreateWithoutAssignedToInput> | LoanRequestCreateWithoutAssignedToInput[] | LoanRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutAssignedToInput | LoanRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: LoanRequestUpsertWithWhereUniqueWithoutAssignedToInput | LoanRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: LoanRequestCreateManyAssignedToInputEnvelope
    set?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    disconnect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    delete?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    update?: LoanRequestUpdateWithWhereUniqueWithoutAssignedToInput | LoanRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: LoanRequestUpdateManyWithWhereWithoutAssignedToInput | LoanRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
  }

  export type LoanHistoryEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutUserInput, LoanHistoryEntryUncheckedCreateWithoutUserInput> | LoanHistoryEntryCreateWithoutUserInput[] | LoanHistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutUserInput | LoanHistoryEntryCreateOrConnectWithoutUserInput[]
    upsert?: LoanHistoryEntryUpsertWithWhereUniqueWithoutUserInput | LoanHistoryEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanHistoryEntryCreateManyUserInputEnvelope
    set?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    disconnect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    delete?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    update?: LoanHistoryEntryUpdateWithWhereUniqueWithoutUserInput | LoanHistoryEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanHistoryEntryUpdateManyWithWhereWithoutUserInput | LoanHistoryEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LoanStageCreateNestedOneWithoutLoanRequestsInput = {
    create?: XOR<LoanStageCreateWithoutLoanRequestsInput, LoanStageUncheckedCreateWithoutLoanRequestsInput>
    connectOrCreate?: LoanStageCreateOrConnectWithoutLoanRequestsInput
    connect?: LoanStageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedLoansInput = {
    create?: XOR<UserCreateWithoutAssignedLoansInput, UserUncheckedCreateWithoutAssignedLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedLoansInput
    connect?: UserWhereUniqueInput
  }

  export type LoanDocumentCreateNestedManyWithoutLoanRequestInput = {
    create?: XOR<LoanDocumentCreateWithoutLoanRequestInput, LoanDocumentUncheckedCreateWithoutLoanRequestInput> | LoanDocumentCreateWithoutLoanRequestInput[] | LoanDocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanDocumentCreateOrConnectWithoutLoanRequestInput | LoanDocumentCreateOrConnectWithoutLoanRequestInput[]
    createMany?: LoanDocumentCreateManyLoanRequestInputEnvelope
    connect?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
  }

  export type LoanHistoryEntryCreateNestedManyWithoutLoanRequestInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutLoanRequestInput, LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput> | LoanHistoryEntryCreateWithoutLoanRequestInput[] | LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput | LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput[]
    createMany?: LoanHistoryEntryCreateManyLoanRequestInputEnvelope
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
  }

  export type LoanDocumentUncheckedCreateNestedManyWithoutLoanRequestInput = {
    create?: XOR<LoanDocumentCreateWithoutLoanRequestInput, LoanDocumentUncheckedCreateWithoutLoanRequestInput> | LoanDocumentCreateWithoutLoanRequestInput[] | LoanDocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanDocumentCreateOrConnectWithoutLoanRequestInput | LoanDocumentCreateOrConnectWithoutLoanRequestInput[]
    createMany?: LoanDocumentCreateManyLoanRequestInputEnvelope
    connect?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
  }

  export type LoanHistoryEntryUncheckedCreateNestedManyWithoutLoanRequestInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutLoanRequestInput, LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput> | LoanHistoryEntryCreateWithoutLoanRequestInput[] | LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput | LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput[]
    createMany?: LoanHistoryEntryCreateManyLoanRequestInputEnvelope
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LoanStageUpdateOneWithoutLoanRequestsNestedInput = {
    create?: XOR<LoanStageCreateWithoutLoanRequestsInput, LoanStageUncheckedCreateWithoutLoanRequestsInput>
    connectOrCreate?: LoanStageCreateOrConnectWithoutLoanRequestsInput
    upsert?: LoanStageUpsertWithoutLoanRequestsInput
    disconnect?: LoanStageWhereInput | boolean
    delete?: LoanStageWhereInput | boolean
    connect?: LoanStageWhereUniqueInput
    update?: XOR<XOR<LoanStageUpdateToOneWithWhereWithoutLoanRequestsInput, LoanStageUpdateWithoutLoanRequestsInput>, LoanStageUncheckedUpdateWithoutLoanRequestsInput>
  }

  export type UserUpdateOneWithoutAssignedLoansNestedInput = {
    create?: XOR<UserCreateWithoutAssignedLoansInput, UserUncheckedCreateWithoutAssignedLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedLoansInput
    upsert?: UserUpsertWithoutAssignedLoansInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedLoansInput, UserUpdateWithoutAssignedLoansInput>, UserUncheckedUpdateWithoutAssignedLoansInput>
  }

  export type LoanDocumentUpdateManyWithoutLoanRequestNestedInput = {
    create?: XOR<LoanDocumentCreateWithoutLoanRequestInput, LoanDocumentUncheckedCreateWithoutLoanRequestInput> | LoanDocumentCreateWithoutLoanRequestInput[] | LoanDocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanDocumentCreateOrConnectWithoutLoanRequestInput | LoanDocumentCreateOrConnectWithoutLoanRequestInput[]
    upsert?: LoanDocumentUpsertWithWhereUniqueWithoutLoanRequestInput | LoanDocumentUpsertWithWhereUniqueWithoutLoanRequestInput[]
    createMany?: LoanDocumentCreateManyLoanRequestInputEnvelope
    set?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    disconnect?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    delete?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    connect?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    update?: LoanDocumentUpdateWithWhereUniqueWithoutLoanRequestInput | LoanDocumentUpdateWithWhereUniqueWithoutLoanRequestInput[]
    updateMany?: LoanDocumentUpdateManyWithWhereWithoutLoanRequestInput | LoanDocumentUpdateManyWithWhereWithoutLoanRequestInput[]
    deleteMany?: LoanDocumentScalarWhereInput | LoanDocumentScalarWhereInput[]
  }

  export type LoanHistoryEntryUpdateManyWithoutLoanRequestNestedInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutLoanRequestInput, LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput> | LoanHistoryEntryCreateWithoutLoanRequestInput[] | LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput | LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput[]
    upsert?: LoanHistoryEntryUpsertWithWhereUniqueWithoutLoanRequestInput | LoanHistoryEntryUpsertWithWhereUniqueWithoutLoanRequestInput[]
    createMany?: LoanHistoryEntryCreateManyLoanRequestInputEnvelope
    set?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    disconnect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    delete?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    update?: LoanHistoryEntryUpdateWithWhereUniqueWithoutLoanRequestInput | LoanHistoryEntryUpdateWithWhereUniqueWithoutLoanRequestInput[]
    updateMany?: LoanHistoryEntryUpdateManyWithWhereWithoutLoanRequestInput | LoanHistoryEntryUpdateManyWithWhereWithoutLoanRequestInput[]
    deleteMany?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
  }

  export type LoanDocumentUncheckedUpdateManyWithoutLoanRequestNestedInput = {
    create?: XOR<LoanDocumentCreateWithoutLoanRequestInput, LoanDocumentUncheckedCreateWithoutLoanRequestInput> | LoanDocumentCreateWithoutLoanRequestInput[] | LoanDocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanDocumentCreateOrConnectWithoutLoanRequestInput | LoanDocumentCreateOrConnectWithoutLoanRequestInput[]
    upsert?: LoanDocumentUpsertWithWhereUniqueWithoutLoanRequestInput | LoanDocumentUpsertWithWhereUniqueWithoutLoanRequestInput[]
    createMany?: LoanDocumentCreateManyLoanRequestInputEnvelope
    set?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    disconnect?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    delete?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    connect?: LoanDocumentWhereUniqueInput | LoanDocumentWhereUniqueInput[]
    update?: LoanDocumentUpdateWithWhereUniqueWithoutLoanRequestInput | LoanDocumentUpdateWithWhereUniqueWithoutLoanRequestInput[]
    updateMany?: LoanDocumentUpdateManyWithWhereWithoutLoanRequestInput | LoanDocumentUpdateManyWithWhereWithoutLoanRequestInput[]
    deleteMany?: LoanDocumentScalarWhereInput | LoanDocumentScalarWhereInput[]
  }

  export type LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestNestedInput = {
    create?: XOR<LoanHistoryEntryCreateWithoutLoanRequestInput, LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput> | LoanHistoryEntryCreateWithoutLoanRequestInput[] | LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput | LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput[]
    upsert?: LoanHistoryEntryUpsertWithWhereUniqueWithoutLoanRequestInput | LoanHistoryEntryUpsertWithWhereUniqueWithoutLoanRequestInput[]
    createMany?: LoanHistoryEntryCreateManyLoanRequestInputEnvelope
    set?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    disconnect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    delete?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    connect?: LoanHistoryEntryWhereUniqueInput | LoanHistoryEntryWhereUniqueInput[]
    update?: LoanHistoryEntryUpdateWithWhereUniqueWithoutLoanRequestInput | LoanHistoryEntryUpdateWithWhereUniqueWithoutLoanRequestInput[]
    updateMany?: LoanHistoryEntryUpdateManyWithWhereWithoutLoanRequestInput | LoanHistoryEntryUpdateManyWithWhereWithoutLoanRequestInput[]
    deleteMany?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
  }

  export type LoanRequestCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LoanRequestCreateOrConnectWithoutDocumentsInput
    connect?: LoanRequestWhereUniqueInput
  }

  export type LoanRequestUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LoanRequestCreateOrConnectWithoutDocumentsInput
    upsert?: LoanRequestUpsertWithoutDocumentsInput
    connect?: LoanRequestWhereUniqueInput
    update?: XOR<XOR<LoanRequestUpdateToOneWithWhereWithoutDocumentsInput, LoanRequestUpdateWithoutDocumentsInput>, LoanRequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type LoanRequestCreateNestedOneWithoutHistoryInput = {
    create?: XOR<LoanRequestCreateWithoutHistoryInput, LoanRequestUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LoanRequestCreateOrConnectWithoutHistoryInput
    connect?: LoanRequestWhereUniqueInput
  }

  export type LoanStageCreateNestedOneWithoutHistoryEntriesInput = {
    create?: XOR<LoanStageCreateWithoutHistoryEntriesInput, LoanStageUncheckedCreateWithoutHistoryEntriesInput>
    connectOrCreate?: LoanStageCreateOrConnectWithoutHistoryEntriesInput
    connect?: LoanStageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryEntriesInput = {
    create?: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type LoanRequestUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<LoanRequestCreateWithoutHistoryInput, LoanRequestUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LoanRequestCreateOrConnectWithoutHistoryInput
    upsert?: LoanRequestUpsertWithoutHistoryInput
    connect?: LoanRequestWhereUniqueInput
    update?: XOR<XOR<LoanRequestUpdateToOneWithWhereWithoutHistoryInput, LoanRequestUpdateWithoutHistoryInput>, LoanRequestUncheckedUpdateWithoutHistoryInput>
  }

  export type LoanStageUpdateOneWithoutHistoryEntriesNestedInput = {
    create?: XOR<LoanStageCreateWithoutHistoryEntriesInput, LoanStageUncheckedCreateWithoutHistoryEntriesInput>
    connectOrCreate?: LoanStageCreateOrConnectWithoutHistoryEntriesInput
    upsert?: LoanStageUpsertWithoutHistoryEntriesInput
    disconnect?: LoanStageWhereInput | boolean
    delete?: LoanStageWhereInput | boolean
    connect?: LoanStageWhereUniqueInput
    update?: XOR<XOR<LoanStageUpdateToOneWithWhereWithoutHistoryEntriesInput, LoanStageUpdateWithoutHistoryEntriesInput>, LoanStageUncheckedUpdateWithoutHistoryEntriesInput>
  }

  export type UserUpdateOneWithoutHistoryEntriesNestedInput = {
    create?: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryEntriesInput
    upsert?: UserUpsertWithoutHistoryEntriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryEntriesInput, UserUpdateWithoutHistoryEntriesInput>, UserUncheckedUpdateWithoutHistoryEntriesInput>
  }

  export type LoanStageCreateNestedOneWithoutStageConfigsInput = {
    create?: XOR<LoanStageCreateWithoutStageConfigsInput, LoanStageUncheckedCreateWithoutStageConfigsInput>
    connectOrCreate?: LoanStageCreateOrConnectWithoutStageConfigsInput
    connect?: LoanStageWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutStageConfigsInput = {
    create?: XOR<RoleCreateWithoutStageConfigsInput, RoleUncheckedCreateWithoutStageConfigsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutStageConfigsInput
    connect?: RoleWhereUniqueInput
  }

  export type RequiredDocumentConfigCreateNestedManyWithoutStageConfigInput = {
    create?: XOR<RequiredDocumentConfigCreateWithoutStageConfigInput, RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput> | RequiredDocumentConfigCreateWithoutStageConfigInput[] | RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput[]
    connectOrCreate?: RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput | RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput[]
    createMany?: RequiredDocumentConfigCreateManyStageConfigInputEnvelope
    connect?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
  }

  export type RequiredDocumentConfigUncheckedCreateNestedManyWithoutStageConfigInput = {
    create?: XOR<RequiredDocumentConfigCreateWithoutStageConfigInput, RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput> | RequiredDocumentConfigCreateWithoutStageConfigInput[] | RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput[]
    connectOrCreate?: RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput | RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput[]
    createMany?: RequiredDocumentConfigCreateManyStageConfigInputEnvelope
    connect?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LoanStageUpdateOneWithoutStageConfigsNestedInput = {
    create?: XOR<LoanStageCreateWithoutStageConfigsInput, LoanStageUncheckedCreateWithoutStageConfigsInput>
    connectOrCreate?: LoanStageCreateOrConnectWithoutStageConfigsInput
    upsert?: LoanStageUpsertWithoutStageConfigsInput
    disconnect?: LoanStageWhereInput | boolean
    delete?: LoanStageWhereInput | boolean
    connect?: LoanStageWhereUniqueInput
    update?: XOR<XOR<LoanStageUpdateToOneWithWhereWithoutStageConfigsInput, LoanStageUpdateWithoutStageConfigsInput>, LoanStageUncheckedUpdateWithoutStageConfigsInput>
  }

  export type RoleUpdateOneWithoutStageConfigsNestedInput = {
    create?: XOR<RoleCreateWithoutStageConfigsInput, RoleUncheckedCreateWithoutStageConfigsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutStageConfigsInput
    upsert?: RoleUpsertWithoutStageConfigsInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutStageConfigsInput, RoleUpdateWithoutStageConfigsInput>, RoleUncheckedUpdateWithoutStageConfigsInput>
  }

  export type RequiredDocumentConfigUpdateManyWithoutStageConfigNestedInput = {
    create?: XOR<RequiredDocumentConfigCreateWithoutStageConfigInput, RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput> | RequiredDocumentConfigCreateWithoutStageConfigInput[] | RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput[]
    connectOrCreate?: RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput | RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput[]
    upsert?: RequiredDocumentConfigUpsertWithWhereUniqueWithoutStageConfigInput | RequiredDocumentConfigUpsertWithWhereUniqueWithoutStageConfigInput[]
    createMany?: RequiredDocumentConfigCreateManyStageConfigInputEnvelope
    set?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    disconnect?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    delete?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    connect?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    update?: RequiredDocumentConfigUpdateWithWhereUniqueWithoutStageConfigInput | RequiredDocumentConfigUpdateWithWhereUniqueWithoutStageConfigInput[]
    updateMany?: RequiredDocumentConfigUpdateManyWithWhereWithoutStageConfigInput | RequiredDocumentConfigUpdateManyWithWhereWithoutStageConfigInput[]
    deleteMany?: RequiredDocumentConfigScalarWhereInput | RequiredDocumentConfigScalarWhereInput[]
  }

  export type RequiredDocumentConfigUncheckedUpdateManyWithoutStageConfigNestedInput = {
    create?: XOR<RequiredDocumentConfigCreateWithoutStageConfigInput, RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput> | RequiredDocumentConfigCreateWithoutStageConfigInput[] | RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput[]
    connectOrCreate?: RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput | RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput[]
    upsert?: RequiredDocumentConfigUpsertWithWhereUniqueWithoutStageConfigInput | RequiredDocumentConfigUpsertWithWhereUniqueWithoutStageConfigInput[]
    createMany?: RequiredDocumentConfigCreateManyStageConfigInputEnvelope
    set?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    disconnect?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    delete?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    connect?: RequiredDocumentConfigWhereUniqueInput | RequiredDocumentConfigWhereUniqueInput[]
    update?: RequiredDocumentConfigUpdateWithWhereUniqueWithoutStageConfigInput | RequiredDocumentConfigUpdateWithWhereUniqueWithoutStageConfigInput[]
    updateMany?: RequiredDocumentConfigUpdateManyWithWhereWithoutStageConfigInput | RequiredDocumentConfigUpdateManyWithWhereWithoutStageConfigInput[]
    deleteMany?: RequiredDocumentConfigScalarWhereInput | RequiredDocumentConfigScalarWhereInput[]
  }

  export type StageConfigCreateNestedOneWithoutRequiredDocumentsInput = {
    create?: XOR<StageConfigCreateWithoutRequiredDocumentsInput, StageConfigUncheckedCreateWithoutRequiredDocumentsInput>
    connectOrCreate?: StageConfigCreateOrConnectWithoutRequiredDocumentsInput
    connect?: StageConfigWhereUniqueInput
  }

  export type StageConfigUpdateOneRequiredWithoutRequiredDocumentsNestedInput = {
    create?: XOR<StageConfigCreateWithoutRequiredDocumentsInput, StageConfigUncheckedCreateWithoutRequiredDocumentsInput>
    connectOrCreate?: StageConfigCreateOrConnectWithoutRequiredDocumentsInput
    upsert?: StageConfigUpsertWithoutRequiredDocumentsInput
    connect?: StageConfigWhereUniqueInput
    update?: XOR<XOR<StageConfigUpdateToOneWithWhereWithoutRequiredDocumentsInput, StageConfigUpdateWithoutRequiredDocumentsInput>, StageConfigUncheckedUpdateWithoutRequiredDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLoans?: LoanRequestCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutUserInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLoans?: LoanRequestUncheckedCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutUserInput
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type StageConfigCreateWithoutTargetRoleInput = {
    id?: string
    name: string
    defaultTimelineDays: number
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loanStage?: LoanStageCreateNestedOneWithoutStageConfigsInput
    requiredDocuments?: RequiredDocumentConfigCreateNestedManyWithoutStageConfigInput
  }

  export type StageConfigUncheckedCreateWithoutTargetRoleInput = {
    id?: string
    name: string
    loanStageId?: string | null
    defaultTimelineDays: number
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredDocuments?: RequiredDocumentConfigUncheckedCreateNestedManyWithoutStageConfigInput
  }

  export type StageConfigCreateOrConnectWithoutTargetRoleInput = {
    where: StageConfigWhereUniqueInput
    create: XOR<StageConfigCreateWithoutTargetRoleInput, StageConfigUncheckedCreateWithoutTargetRoleInput>
  }

  export type StageConfigCreateManyTargetRoleInputEnvelope = {
    data: StageConfigCreateManyTargetRoleInput | StageConfigCreateManyTargetRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    roleId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type StageConfigUpsertWithWhereUniqueWithoutTargetRoleInput = {
    where: StageConfigWhereUniqueInput
    update: XOR<StageConfigUpdateWithoutTargetRoleInput, StageConfigUncheckedUpdateWithoutTargetRoleInput>
    create: XOR<StageConfigCreateWithoutTargetRoleInput, StageConfigUncheckedCreateWithoutTargetRoleInput>
  }

  export type StageConfigUpdateWithWhereUniqueWithoutTargetRoleInput = {
    where: StageConfigWhereUniqueInput
    data: XOR<StageConfigUpdateWithoutTargetRoleInput, StageConfigUncheckedUpdateWithoutTargetRoleInput>
  }

  export type StageConfigUpdateManyWithWhereWithoutTargetRoleInput = {
    where: StageConfigScalarWhereInput
    data: XOR<StageConfigUpdateManyMutationInput, StageConfigUncheckedUpdateManyWithoutTargetRoleInput>
  }

  export type StageConfigScalarWhereInput = {
    AND?: StageConfigScalarWhereInput | StageConfigScalarWhereInput[]
    OR?: StageConfigScalarWhereInput[]
    NOT?: StageConfigScalarWhereInput | StageConfigScalarWhereInput[]
    id?: StringFilter<"StageConfig"> | string
    name?: StringFilter<"StageConfig"> | string
    loanStageId?: StringNullableFilter<"StageConfig"> | string | null
    defaultTimelineDays?: IntFilter<"StageConfig"> | number
    targetRoleId?: StringNullableFilter<"StageConfig"> | string | null
    percentageWeight?: IntFilter<"StageConfig"> | number
    createdAt?: DateTimeFilter<"StageConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StageConfig"> | Date | string
  }

  export type LoanRequestCreateWithoutCurrentStageInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedLoansInput
    documents?: LoanDocumentCreateNestedManyWithoutLoanRequestInput
    history?: LoanHistoryEntryCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateWithoutCurrentStageInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    assignedToId?: string | null
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: LoanDocumentUncheckedCreateNestedManyWithoutLoanRequestInput
    history?: LoanHistoryEntryUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestCreateOrConnectWithoutCurrentStageInput = {
    where: LoanRequestWhereUniqueInput
    create: XOR<LoanRequestCreateWithoutCurrentStageInput, LoanRequestUncheckedCreateWithoutCurrentStageInput>
  }

  export type LoanRequestCreateManyCurrentStageInputEnvelope = {
    data: LoanRequestCreateManyCurrentStageInput | LoanRequestCreateManyCurrentStageInput[]
    skipDuplicates?: boolean
  }

  export type LoanHistoryEntryCreateWithoutStageInput = {
    id?: string
    timestamp: Date | string
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    loanRequest: LoanRequestCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryEntriesInput
  }

  export type LoanHistoryEntryUncheckedCreateWithoutStageInput = {
    id?: string
    loanRequestId: string
    timestamp: Date | string
    userId?: string | null
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type LoanHistoryEntryCreateOrConnectWithoutStageInput = {
    where: LoanHistoryEntryWhereUniqueInput
    create: XOR<LoanHistoryEntryCreateWithoutStageInput, LoanHistoryEntryUncheckedCreateWithoutStageInput>
  }

  export type LoanHistoryEntryCreateManyStageInputEnvelope = {
    data: LoanHistoryEntryCreateManyStageInput | LoanHistoryEntryCreateManyStageInput[]
    skipDuplicates?: boolean
  }

  export type StageConfigCreateWithoutLoanStageInput = {
    id?: string
    name: string
    defaultTimelineDays: number
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    targetRole?: RoleCreateNestedOneWithoutStageConfigsInput
    requiredDocuments?: RequiredDocumentConfigCreateNestedManyWithoutStageConfigInput
  }

  export type StageConfigUncheckedCreateWithoutLoanStageInput = {
    id?: string
    name: string
    defaultTimelineDays: number
    targetRoleId?: string | null
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredDocuments?: RequiredDocumentConfigUncheckedCreateNestedManyWithoutStageConfigInput
  }

  export type StageConfigCreateOrConnectWithoutLoanStageInput = {
    where: StageConfigWhereUniqueInput
    create: XOR<StageConfigCreateWithoutLoanStageInput, StageConfigUncheckedCreateWithoutLoanStageInput>
  }

  export type StageConfigCreateManyLoanStageInputEnvelope = {
    data: StageConfigCreateManyLoanStageInput | StageConfigCreateManyLoanStageInput[]
    skipDuplicates?: boolean
  }

  export type LoanRequestUpsertWithWhereUniqueWithoutCurrentStageInput = {
    where: LoanRequestWhereUniqueInput
    update: XOR<LoanRequestUpdateWithoutCurrentStageInput, LoanRequestUncheckedUpdateWithoutCurrentStageInput>
    create: XOR<LoanRequestCreateWithoutCurrentStageInput, LoanRequestUncheckedCreateWithoutCurrentStageInput>
  }

  export type LoanRequestUpdateWithWhereUniqueWithoutCurrentStageInput = {
    where: LoanRequestWhereUniqueInput
    data: XOR<LoanRequestUpdateWithoutCurrentStageInput, LoanRequestUncheckedUpdateWithoutCurrentStageInput>
  }

  export type LoanRequestUpdateManyWithWhereWithoutCurrentStageInput = {
    where: LoanRequestScalarWhereInput
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyWithoutCurrentStageInput>
  }

  export type LoanRequestScalarWhereInput = {
    AND?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
    OR?: LoanRequestScalarWhereInput[]
    NOT?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
    id?: StringFilter<"LoanRequest"> | string
    loanNumber?: StringFilter<"LoanRequest"> | string
    customerNumber?: StringFilter<"LoanRequest"> | string
    customerName?: StringFilter<"LoanRequest"> | string
    customerEmail?: StringFilter<"LoanRequest"> | string
    customerPhone?: StringFilter<"LoanRequest"> | string
    loanAmount?: DecimalFilter<"LoanRequest"> | Decimal | DecimalJsLike | number | string
    loanType?: StringFilter<"LoanRequest"> | string
    loanPurpose?: StringFilter<"LoanRequest"> | string
    currentStageId?: StringNullableFilter<"LoanRequest"> | string | null
    submittedDate?: DateTimeFilter<"LoanRequest"> | Date | string
    lastUpdatedDate?: DateTimeFilter<"LoanRequest"> | Date | string
    assignedToId?: StringNullableFilter<"LoanRequest"> | string | null
    stageDeadline?: DateTimeNullableFilter<"LoanRequest"> | Date | string | null
    isOverdue?: BoolFilter<"LoanRequest"> | boolean
    isReadyForManagerReview?: BoolFilter<"LoanRequest"> | boolean
    createdAt?: DateTimeFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LoanRequest"> | Date | string
  }

  export type LoanHistoryEntryUpsertWithWhereUniqueWithoutStageInput = {
    where: LoanHistoryEntryWhereUniqueInput
    update: XOR<LoanHistoryEntryUpdateWithoutStageInput, LoanHistoryEntryUncheckedUpdateWithoutStageInput>
    create: XOR<LoanHistoryEntryCreateWithoutStageInput, LoanHistoryEntryUncheckedCreateWithoutStageInput>
  }

  export type LoanHistoryEntryUpdateWithWhereUniqueWithoutStageInput = {
    where: LoanHistoryEntryWhereUniqueInput
    data: XOR<LoanHistoryEntryUpdateWithoutStageInput, LoanHistoryEntryUncheckedUpdateWithoutStageInput>
  }

  export type LoanHistoryEntryUpdateManyWithWhereWithoutStageInput = {
    where: LoanHistoryEntryScalarWhereInput
    data: XOR<LoanHistoryEntryUpdateManyMutationInput, LoanHistoryEntryUncheckedUpdateManyWithoutStageInput>
  }

  export type LoanHistoryEntryScalarWhereInput = {
    AND?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
    OR?: LoanHistoryEntryScalarWhereInput[]
    NOT?: LoanHistoryEntryScalarWhereInput | LoanHistoryEntryScalarWhereInput[]
    id?: StringFilter<"LoanHistoryEntry"> | string
    loanRequestId?: StringFilter<"LoanHistoryEntry"> | string
    stageId?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    timestamp?: DateTimeFilter<"LoanHistoryEntry"> | Date | string
    userId?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    userName?: StringFilter<"LoanHistoryEntry"> | string
    notes?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    requiredFulfilment?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    ipAddress?: StringNullableFilter<"LoanHistoryEntry"> | string | null
    createdAt?: DateTimeFilter<"LoanHistoryEntry"> | Date | string
  }

  export type StageConfigUpsertWithWhereUniqueWithoutLoanStageInput = {
    where: StageConfigWhereUniqueInput
    update: XOR<StageConfigUpdateWithoutLoanStageInput, StageConfigUncheckedUpdateWithoutLoanStageInput>
    create: XOR<StageConfigCreateWithoutLoanStageInput, StageConfigUncheckedCreateWithoutLoanStageInput>
  }

  export type StageConfigUpdateWithWhereUniqueWithoutLoanStageInput = {
    where: StageConfigWhereUniqueInput
    data: XOR<StageConfigUpdateWithoutLoanStageInput, StageConfigUncheckedUpdateWithoutLoanStageInput>
  }

  export type StageConfigUpdateManyWithWhereWithoutLoanStageInput = {
    where: StageConfigScalarWhereInput
    data: XOR<StageConfigUpdateManyMutationInput, StageConfigUncheckedUpdateManyWithoutLoanStageInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stageConfigs?: StageConfigCreateNestedManyWithoutTargetRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stageConfigs?: StageConfigUncheckedCreateNestedManyWithoutTargetRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type LoanRequestCreateWithoutAssignedToInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentStage?: LoanStageCreateNestedOneWithoutLoanRequestsInput
    documents?: LoanDocumentCreateNestedManyWithoutLoanRequestInput
    history?: LoanHistoryEntryCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    currentStageId?: string | null
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: LoanDocumentUncheckedCreateNestedManyWithoutLoanRequestInput
    history?: LoanHistoryEntryUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestCreateOrConnectWithoutAssignedToInput = {
    where: LoanRequestWhereUniqueInput
    create: XOR<LoanRequestCreateWithoutAssignedToInput, LoanRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type LoanRequestCreateManyAssignedToInputEnvelope = {
    data: LoanRequestCreateManyAssignedToInput | LoanRequestCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type LoanHistoryEntryCreateWithoutUserInput = {
    id?: string
    timestamp: Date | string
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    loanRequest: LoanRequestCreateNestedOneWithoutHistoryInput
    stage?: LoanStageCreateNestedOneWithoutHistoryEntriesInput
  }

  export type LoanHistoryEntryUncheckedCreateWithoutUserInput = {
    id?: string
    loanRequestId: string
    stageId?: string | null
    timestamp: Date | string
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type LoanHistoryEntryCreateOrConnectWithoutUserInput = {
    where: LoanHistoryEntryWhereUniqueInput
    create: XOR<LoanHistoryEntryCreateWithoutUserInput, LoanHistoryEntryUncheckedCreateWithoutUserInput>
  }

  export type LoanHistoryEntryCreateManyUserInputEnvelope = {
    data: LoanHistoryEntryCreateManyUserInput | LoanHistoryEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSubordinatesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    assignedLoans?: LoanRequestCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutUserInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
  }

  export type UserUncheckedCreateWithoutSubordinatesInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLoans?: LoanRequestUncheckedCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubordinatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    assignedLoans?: LoanRequestCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutUserInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLoans?: LoanRequestUncheckedCreateNestedManyWithoutAssignedToInput
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutUserInput
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stageConfigs?: StageConfigUpdateManyWithoutTargetRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stageConfigs?: StageConfigUncheckedUpdateManyWithoutTargetRoleNestedInput
  }

  export type LoanRequestUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: LoanRequestWhereUniqueInput
    update: XOR<LoanRequestUpdateWithoutAssignedToInput, LoanRequestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<LoanRequestCreateWithoutAssignedToInput, LoanRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type LoanRequestUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: LoanRequestWhereUniqueInput
    data: XOR<LoanRequestUpdateWithoutAssignedToInput, LoanRequestUncheckedUpdateWithoutAssignedToInput>
  }

  export type LoanRequestUpdateManyWithWhereWithoutAssignedToInput = {
    where: LoanRequestScalarWhereInput
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type LoanHistoryEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanHistoryEntryWhereUniqueInput
    update: XOR<LoanHistoryEntryUpdateWithoutUserInput, LoanHistoryEntryUncheckedUpdateWithoutUserInput>
    create: XOR<LoanHistoryEntryCreateWithoutUserInput, LoanHistoryEntryUncheckedCreateWithoutUserInput>
  }

  export type LoanHistoryEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanHistoryEntryWhereUniqueInput
    data: XOR<LoanHistoryEntryUpdateWithoutUserInput, LoanHistoryEntryUncheckedUpdateWithoutUserInput>
  }

  export type LoanHistoryEntryUpdateManyWithWhereWithoutUserInput = {
    where: LoanHistoryEntryScalarWhereInput
    data: XOR<LoanHistoryEntryUpdateManyMutationInput, LoanHistoryEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserUpsertWithoutSubordinatesInput = {
    update: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    assignedLoans?: LoanRequestUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutUserNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
  }

  export type UserUncheckedUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLoans?: LoanRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type LoanStageCreateWithoutLoanRequestsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutStageInput
    stageConfigs?: StageConfigCreateNestedManyWithoutLoanStageInput
  }

  export type LoanStageUncheckedCreateWithoutLoanRequestsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutStageInput
    stageConfigs?: StageConfigUncheckedCreateNestedManyWithoutLoanStageInput
  }

  export type LoanStageCreateOrConnectWithoutLoanRequestsInput = {
    where: LoanStageWhereUniqueInput
    create: XOR<LoanStageCreateWithoutLoanRequestsInput, LoanStageUncheckedCreateWithoutLoanRequestsInput>
  }

  export type UserCreateWithoutAssignedLoansInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutUserInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutAssignedLoansInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutUserInput
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutAssignedLoansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedLoansInput, UserUncheckedCreateWithoutAssignedLoansInput>
  }

  export type LoanDocumentCreateWithoutLoanRequestInput = {
    id?: string
    name: string
    status: string
    notes?: string | null
    uploadedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanDocumentUncheckedCreateWithoutLoanRequestInput = {
    id?: string
    name: string
    status: string
    notes?: string | null
    uploadedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanDocumentCreateOrConnectWithoutLoanRequestInput = {
    where: LoanDocumentWhereUniqueInput
    create: XOR<LoanDocumentCreateWithoutLoanRequestInput, LoanDocumentUncheckedCreateWithoutLoanRequestInput>
  }

  export type LoanDocumentCreateManyLoanRequestInputEnvelope = {
    data: LoanDocumentCreateManyLoanRequestInput | LoanDocumentCreateManyLoanRequestInput[]
    skipDuplicates?: boolean
  }

  export type LoanHistoryEntryCreateWithoutLoanRequestInput = {
    id?: string
    timestamp: Date | string
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    stage?: LoanStageCreateNestedOneWithoutHistoryEntriesInput
    user?: UserCreateNestedOneWithoutHistoryEntriesInput
  }

  export type LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput = {
    id?: string
    stageId?: string | null
    timestamp: Date | string
    userId?: string | null
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type LoanHistoryEntryCreateOrConnectWithoutLoanRequestInput = {
    where: LoanHistoryEntryWhereUniqueInput
    create: XOR<LoanHistoryEntryCreateWithoutLoanRequestInput, LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput>
  }

  export type LoanHistoryEntryCreateManyLoanRequestInputEnvelope = {
    data: LoanHistoryEntryCreateManyLoanRequestInput | LoanHistoryEntryCreateManyLoanRequestInput[]
    skipDuplicates?: boolean
  }

  export type LoanStageUpsertWithoutLoanRequestsInput = {
    update: XOR<LoanStageUpdateWithoutLoanRequestsInput, LoanStageUncheckedUpdateWithoutLoanRequestsInput>
    create: XOR<LoanStageCreateWithoutLoanRequestsInput, LoanStageUncheckedCreateWithoutLoanRequestsInput>
    where?: LoanStageWhereInput
  }

  export type LoanStageUpdateToOneWithWhereWithoutLoanRequestsInput = {
    where?: LoanStageWhereInput
    data: XOR<LoanStageUpdateWithoutLoanRequestsInput, LoanStageUncheckedUpdateWithoutLoanRequestsInput>
  }

  export type LoanStageUpdateWithoutLoanRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyEntries?: LoanHistoryEntryUpdateManyWithoutStageNestedInput
    stageConfigs?: StageConfigUpdateManyWithoutLoanStageNestedInput
  }

  export type LoanStageUncheckedUpdateWithoutLoanRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutStageNestedInput
    stageConfigs?: StageConfigUncheckedUpdateManyWithoutLoanStageNestedInput
  }

  export type UserUpsertWithoutAssignedLoansInput = {
    update: XOR<UserUpdateWithoutAssignedLoansInput, UserUncheckedUpdateWithoutAssignedLoansInput>
    create: XOR<UserCreateWithoutAssignedLoansInput, UserUncheckedCreateWithoutAssignedLoansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedLoansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedLoansInput, UserUncheckedUpdateWithoutAssignedLoansInput>
  }

  export type UserUpdateWithoutAssignedLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutUserNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type LoanDocumentUpsertWithWhereUniqueWithoutLoanRequestInput = {
    where: LoanDocumentWhereUniqueInput
    update: XOR<LoanDocumentUpdateWithoutLoanRequestInput, LoanDocumentUncheckedUpdateWithoutLoanRequestInput>
    create: XOR<LoanDocumentCreateWithoutLoanRequestInput, LoanDocumentUncheckedCreateWithoutLoanRequestInput>
  }

  export type LoanDocumentUpdateWithWhereUniqueWithoutLoanRequestInput = {
    where: LoanDocumentWhereUniqueInput
    data: XOR<LoanDocumentUpdateWithoutLoanRequestInput, LoanDocumentUncheckedUpdateWithoutLoanRequestInput>
  }

  export type LoanDocumentUpdateManyWithWhereWithoutLoanRequestInput = {
    where: LoanDocumentScalarWhereInput
    data: XOR<LoanDocumentUpdateManyMutationInput, LoanDocumentUncheckedUpdateManyWithoutLoanRequestInput>
  }

  export type LoanDocumentScalarWhereInput = {
    AND?: LoanDocumentScalarWhereInput | LoanDocumentScalarWhereInput[]
    OR?: LoanDocumentScalarWhereInput[]
    NOT?: LoanDocumentScalarWhereInput | LoanDocumentScalarWhereInput[]
    id?: StringFilter<"LoanDocument"> | string
    loanRequestId?: StringFilter<"LoanDocument"> | string
    name?: StringFilter<"LoanDocument"> | string
    status?: StringFilter<"LoanDocument"> | string
    notes?: StringNullableFilter<"LoanDocument"> | string | null
    uploadedAt?: DateTimeFilter<"LoanDocument"> | Date | string
    createdAt?: DateTimeFilter<"LoanDocument"> | Date | string
    updatedAt?: DateTimeFilter<"LoanDocument"> | Date | string
  }

  export type LoanHistoryEntryUpsertWithWhereUniqueWithoutLoanRequestInput = {
    where: LoanHistoryEntryWhereUniqueInput
    update: XOR<LoanHistoryEntryUpdateWithoutLoanRequestInput, LoanHistoryEntryUncheckedUpdateWithoutLoanRequestInput>
    create: XOR<LoanHistoryEntryCreateWithoutLoanRequestInput, LoanHistoryEntryUncheckedCreateWithoutLoanRequestInput>
  }

  export type LoanHistoryEntryUpdateWithWhereUniqueWithoutLoanRequestInput = {
    where: LoanHistoryEntryWhereUniqueInput
    data: XOR<LoanHistoryEntryUpdateWithoutLoanRequestInput, LoanHistoryEntryUncheckedUpdateWithoutLoanRequestInput>
  }

  export type LoanHistoryEntryUpdateManyWithWhereWithoutLoanRequestInput = {
    where: LoanHistoryEntryScalarWhereInput
    data: XOR<LoanHistoryEntryUpdateManyMutationInput, LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestInput>
  }

  export type LoanRequestCreateWithoutDocumentsInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentStage?: LoanStageCreateNestedOneWithoutLoanRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedLoansInput
    history?: LoanHistoryEntryCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateWithoutDocumentsInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    currentStageId?: string | null
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    assignedToId?: string | null
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: LoanHistoryEntryUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestCreateOrConnectWithoutDocumentsInput = {
    where: LoanRequestWhereUniqueInput
    create: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
  }

  export type LoanRequestUpsertWithoutDocumentsInput = {
    update: XOR<LoanRequestUpdateWithoutDocumentsInput, LoanRequestUncheckedUpdateWithoutDocumentsInput>
    create: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
    where?: LoanRequestWhereInput
  }

  export type LoanRequestUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: LoanRequestWhereInput
    data: XOR<LoanRequestUpdateWithoutDocumentsInput, LoanRequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type LoanRequestUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStage?: LoanStageUpdateOneWithoutLoanRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedLoansNestedInput
    history?: LoanHistoryEntryUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    currentStageId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestCreateWithoutHistoryInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    currentStage?: LoanStageCreateNestedOneWithoutLoanRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedLoansInput
    documents?: LoanDocumentCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateWithoutHistoryInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    currentStageId?: string | null
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    assignedToId?: string | null
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: LoanDocumentUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestCreateOrConnectWithoutHistoryInput = {
    where: LoanRequestWhereUniqueInput
    create: XOR<LoanRequestCreateWithoutHistoryInput, LoanRequestUncheckedCreateWithoutHistoryInput>
  }

  export type LoanStageCreateWithoutHistoryEntriesInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestCreateNestedManyWithoutCurrentStageInput
    stageConfigs?: StageConfigCreateNestedManyWithoutLoanStageInput
  }

  export type LoanStageUncheckedCreateWithoutHistoryEntriesInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestUncheckedCreateNestedManyWithoutCurrentStageInput
    stageConfigs?: StageConfigUncheckedCreateNestedManyWithoutLoanStageInput
  }

  export type LoanStageCreateOrConnectWithoutHistoryEntriesInput = {
    where: LoanStageWhereUniqueInput
    create: XOR<LoanStageCreateWithoutHistoryEntriesInput, LoanStageUncheckedCreateWithoutHistoryEntriesInput>
  }

  export type UserCreateWithoutHistoryEntriesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    assignedLoans?: LoanRequestCreateNestedManyWithoutAssignedToInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutHistoryEntriesInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLoans?: LoanRequestUncheckedCreateNestedManyWithoutAssignedToInput
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutHistoryEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
  }

  export type LoanRequestUpsertWithoutHistoryInput = {
    update: XOR<LoanRequestUpdateWithoutHistoryInput, LoanRequestUncheckedUpdateWithoutHistoryInput>
    create: XOR<LoanRequestCreateWithoutHistoryInput, LoanRequestUncheckedCreateWithoutHistoryInput>
    where?: LoanRequestWhereInput
  }

  export type LoanRequestUpdateToOneWithWhereWithoutHistoryInput = {
    where?: LoanRequestWhereInput
    data: XOR<LoanRequestUpdateWithoutHistoryInput, LoanRequestUncheckedUpdateWithoutHistoryInput>
  }

  export type LoanRequestUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStage?: LoanStageUpdateOneWithoutLoanRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedLoansNestedInput
    documents?: LoanDocumentUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    currentStageId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: LoanDocumentUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanStageUpsertWithoutHistoryEntriesInput = {
    update: XOR<LoanStageUpdateWithoutHistoryEntriesInput, LoanStageUncheckedUpdateWithoutHistoryEntriesInput>
    create: XOR<LoanStageCreateWithoutHistoryEntriesInput, LoanStageUncheckedCreateWithoutHistoryEntriesInput>
    where?: LoanStageWhereInput
  }

  export type LoanStageUpdateToOneWithWhereWithoutHistoryEntriesInput = {
    where?: LoanStageWhereInput
    data: XOR<LoanStageUpdateWithoutHistoryEntriesInput, LoanStageUncheckedUpdateWithoutHistoryEntriesInput>
  }

  export type LoanStageUpdateWithoutHistoryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUpdateManyWithoutCurrentStageNestedInput
    stageConfigs?: StageConfigUpdateManyWithoutLoanStageNestedInput
  }

  export type LoanStageUncheckedUpdateWithoutHistoryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUncheckedUpdateManyWithoutCurrentStageNestedInput
    stageConfigs?: StageConfigUncheckedUpdateManyWithoutLoanStageNestedInput
  }

  export type UserUpsertWithoutHistoryEntriesInput = {
    update: XOR<UserUpdateWithoutHistoryEntriesInput, UserUncheckedUpdateWithoutHistoryEntriesInput>
    create: XOR<UserCreateWithoutHistoryEntriesInput, UserUncheckedCreateWithoutHistoryEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryEntriesInput, UserUncheckedUpdateWithoutHistoryEntriesInput>
  }

  export type UserUpdateWithoutHistoryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    assignedLoans?: LoanRequestUpdateManyWithoutAssignedToNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLoans?: LoanRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type LoanStageCreateWithoutStageConfigsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestCreateNestedManyWithoutCurrentStageInput
    historyEntries?: LoanHistoryEntryCreateNestedManyWithoutStageInput
  }

  export type LoanStageUncheckedCreateWithoutStageConfigsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestUncheckedCreateNestedManyWithoutCurrentStageInput
    historyEntries?: LoanHistoryEntryUncheckedCreateNestedManyWithoutStageInput
  }

  export type LoanStageCreateOrConnectWithoutStageConfigsInput = {
    where: LoanStageWhereUniqueInput
    create: XOR<LoanStageCreateWithoutStageConfigsInput, LoanStageUncheckedCreateWithoutStageConfigsInput>
  }

  export type RoleCreateWithoutStageConfigsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutStageConfigsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutStageConfigsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutStageConfigsInput, RoleUncheckedCreateWithoutStageConfigsInput>
  }

  export type RequiredDocumentConfigCreateWithoutStageConfigInput = {
    id?: string
    name: string
    isMandatory?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput = {
    id?: string
    name: string
    isMandatory?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequiredDocumentConfigCreateOrConnectWithoutStageConfigInput = {
    where: RequiredDocumentConfigWhereUniqueInput
    create: XOR<RequiredDocumentConfigCreateWithoutStageConfigInput, RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput>
  }

  export type RequiredDocumentConfigCreateManyStageConfigInputEnvelope = {
    data: RequiredDocumentConfigCreateManyStageConfigInput | RequiredDocumentConfigCreateManyStageConfigInput[]
    skipDuplicates?: boolean
  }

  export type LoanStageUpsertWithoutStageConfigsInput = {
    update: XOR<LoanStageUpdateWithoutStageConfigsInput, LoanStageUncheckedUpdateWithoutStageConfigsInput>
    create: XOR<LoanStageCreateWithoutStageConfigsInput, LoanStageUncheckedCreateWithoutStageConfigsInput>
    where?: LoanStageWhereInput
  }

  export type LoanStageUpdateToOneWithWhereWithoutStageConfigsInput = {
    where?: LoanStageWhereInput
    data: XOR<LoanStageUpdateWithoutStageConfigsInput, LoanStageUncheckedUpdateWithoutStageConfigsInput>
  }

  export type LoanStageUpdateWithoutStageConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUpdateManyWithoutCurrentStageNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutStageNestedInput
  }

  export type LoanStageUncheckedUpdateWithoutStageConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUncheckedUpdateManyWithoutCurrentStageNestedInput
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutStageNestedInput
  }

  export type RoleUpsertWithoutStageConfigsInput = {
    update: XOR<RoleUpdateWithoutStageConfigsInput, RoleUncheckedUpdateWithoutStageConfigsInput>
    create: XOR<RoleCreateWithoutStageConfigsInput, RoleUncheckedCreateWithoutStageConfigsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutStageConfigsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutStageConfigsInput, RoleUncheckedUpdateWithoutStageConfigsInput>
  }

  export type RoleUpdateWithoutStageConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutStageConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RequiredDocumentConfigUpsertWithWhereUniqueWithoutStageConfigInput = {
    where: RequiredDocumentConfigWhereUniqueInput
    update: XOR<RequiredDocumentConfigUpdateWithoutStageConfigInput, RequiredDocumentConfigUncheckedUpdateWithoutStageConfigInput>
    create: XOR<RequiredDocumentConfigCreateWithoutStageConfigInput, RequiredDocumentConfigUncheckedCreateWithoutStageConfigInput>
  }

  export type RequiredDocumentConfigUpdateWithWhereUniqueWithoutStageConfigInput = {
    where: RequiredDocumentConfigWhereUniqueInput
    data: XOR<RequiredDocumentConfigUpdateWithoutStageConfigInput, RequiredDocumentConfigUncheckedUpdateWithoutStageConfigInput>
  }

  export type RequiredDocumentConfigUpdateManyWithWhereWithoutStageConfigInput = {
    where: RequiredDocumentConfigScalarWhereInput
    data: XOR<RequiredDocumentConfigUpdateManyMutationInput, RequiredDocumentConfigUncheckedUpdateManyWithoutStageConfigInput>
  }

  export type RequiredDocumentConfigScalarWhereInput = {
    AND?: RequiredDocumentConfigScalarWhereInput | RequiredDocumentConfigScalarWhereInput[]
    OR?: RequiredDocumentConfigScalarWhereInput[]
    NOT?: RequiredDocumentConfigScalarWhereInput | RequiredDocumentConfigScalarWhereInput[]
    id?: StringFilter<"RequiredDocumentConfig"> | string
    stageConfigId?: StringFilter<"RequiredDocumentConfig"> | string
    name?: StringFilter<"RequiredDocumentConfig"> | string
    isMandatory?: BoolFilter<"RequiredDocumentConfig"> | boolean
    createdAt?: DateTimeFilter<"RequiredDocumentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"RequiredDocumentConfig"> | Date | string
  }

  export type StageConfigCreateWithoutRequiredDocumentsInput = {
    id?: string
    name: string
    defaultTimelineDays: number
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    loanStage?: LoanStageCreateNestedOneWithoutStageConfigsInput
    targetRole?: RoleCreateNestedOneWithoutStageConfigsInput
  }

  export type StageConfigUncheckedCreateWithoutRequiredDocumentsInput = {
    id?: string
    name: string
    loanStageId?: string | null
    defaultTimelineDays: number
    targetRoleId?: string | null
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageConfigCreateOrConnectWithoutRequiredDocumentsInput = {
    where: StageConfigWhereUniqueInput
    create: XOR<StageConfigCreateWithoutRequiredDocumentsInput, StageConfigUncheckedCreateWithoutRequiredDocumentsInput>
  }

  export type StageConfigUpsertWithoutRequiredDocumentsInput = {
    update: XOR<StageConfigUpdateWithoutRequiredDocumentsInput, StageConfigUncheckedUpdateWithoutRequiredDocumentsInput>
    create: XOR<StageConfigCreateWithoutRequiredDocumentsInput, StageConfigUncheckedCreateWithoutRequiredDocumentsInput>
    where?: StageConfigWhereInput
  }

  export type StageConfigUpdateToOneWithWhereWithoutRequiredDocumentsInput = {
    where?: StageConfigWhereInput
    data: XOR<StageConfigUpdateWithoutRequiredDocumentsInput, StageConfigUncheckedUpdateWithoutRequiredDocumentsInput>
  }

  export type StageConfigUpdateWithoutRequiredDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanStage?: LoanStageUpdateOneWithoutStageConfigsNestedInput
    targetRole?: RoleUpdateOneWithoutStageConfigsNestedInput
  }

  export type StageConfigUncheckedUpdateWithoutRequiredDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    loanStageId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    targetRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageConfigCreateManyTargetRoleInput = {
    id?: string
    name: string
    loanStageId?: string | null
    defaultTimelineDays: number
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLoans?: LoanRequestUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutUserNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLoans?: LoanRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageConfigUpdateWithoutTargetRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanStage?: LoanStageUpdateOneWithoutStageConfigsNestedInput
    requiredDocuments?: RequiredDocumentConfigUpdateManyWithoutStageConfigNestedInput
  }

  export type StageConfigUncheckedUpdateWithoutTargetRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    loanStageId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredDocuments?: RequiredDocumentConfigUncheckedUpdateManyWithoutStageConfigNestedInput
  }

  export type StageConfigUncheckedUpdateManyWithoutTargetRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    loanStageId?: NullableStringFieldUpdateOperationsInput | string | null
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestCreateManyCurrentStageInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    assignedToId?: string | null
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanHistoryEntryCreateManyStageInput = {
    id?: string
    loanRequestId: string
    timestamp: Date | string
    userId?: string | null
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type StageConfigCreateManyLoanStageInput = {
    id?: string
    name: string
    defaultTimelineDays: number
    targetRoleId?: string | null
    percentageWeight: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanRequestUpdateWithoutCurrentStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedLoansNestedInput
    documents?: LoanDocumentUpdateManyWithoutLoanRequestNestedInput
    history?: LoanHistoryEntryUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateWithoutCurrentStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: LoanDocumentUncheckedUpdateManyWithoutLoanRequestNestedInput
    history?: LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateManyWithoutCurrentStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequest?: LoanRequestUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryEntriesNestedInput
  }

  export type LoanHistoryEntryUncheckedUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUncheckedUpdateManyWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageConfigUpdateWithoutLoanStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetRole?: RoleUpdateOneWithoutStageConfigsNestedInput
    requiredDocuments?: RequiredDocumentConfigUpdateManyWithoutStageConfigNestedInput
  }

  export type StageConfigUncheckedUpdateWithoutLoanStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    targetRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredDocuments?: RequiredDocumentConfigUncheckedUpdateManyWithoutStageConfigNestedInput
  }

  export type StageConfigUncheckedUpdateManyWithoutLoanStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultTimelineDays?: IntFieldUpdateOperationsInput | number
    targetRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    percentageWeight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestCreateManyAssignedToInput = {
    id?: string
    loanNumber: string
    customerNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    loanAmount: Decimal | DecimalJsLike | number | string
    loanType: string
    loanPurpose: string
    currentStageId?: string | null
    submittedDate: Date | string
    lastUpdatedDate: Date | string
    stageDeadline?: Date | string | null
    isOverdue: boolean
    isReadyForManagerReview: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanHistoryEntryCreateManyUserInput = {
    id?: string
    loanRequestId: string
    stageId?: string | null
    timestamp: Date | string
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type UserCreateManyManagerInput = {
    id?: string
    name: string
    email: string
    roleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentStage?: LoanStageUpdateOneWithoutLoanRequestsNestedInput
    documents?: LoanDocumentUpdateManyWithoutLoanRequestNestedInput
    history?: LoanHistoryEntryUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    currentStageId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: LoanDocumentUncheckedUpdateManyWithoutLoanRequestNestedInput
    history?: LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanNumber?: StringFieldUpdateOperationsInput | string
    customerNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    loanAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loanType?: StringFieldUpdateOperationsInput | string
    loanPurpose?: StringFieldUpdateOperationsInput | string
    currentStageId?: NullableStringFieldUpdateOperationsInput | string | null
    submittedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    stageDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOverdue?: BoolFieldUpdateOperationsInput | boolean
    isReadyForManagerReview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequest?: LoanRequestUpdateOneRequiredWithoutHistoryNestedInput
    stage?: LoanStageUpdateOneWithoutHistoryEntriesNestedInput
  }

  export type LoanHistoryEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanRequestId?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    assignedLoans?: LoanRequestUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUpdateManyWithoutUserNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLoans?: LoanRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    historyEntries?: LoanHistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanDocumentCreateManyLoanRequestInput = {
    id?: string
    name: string
    status: string
    notes?: string | null
    uploadedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanHistoryEntryCreateManyLoanRequestInput = {
    id?: string
    stageId?: string | null
    timestamp: Date | string
    userId?: string | null
    userName: string
    notes?: string | null
    requiredFulfilment?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type LoanDocumentUpdateWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanDocumentUncheckedUpdateWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanDocumentUncheckedUpdateManyWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUpdateWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: LoanStageUpdateOneWithoutHistoryEntriesNestedInput
    user?: UserUpdateOneWithoutHistoryEntriesNestedInput
  }

  export type LoanHistoryEntryUncheckedUpdateWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanHistoryEntryUncheckedUpdateManyWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    requiredFulfilment?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredDocumentConfigCreateManyStageConfigInput = {
    id?: string
    name: string
    isMandatory?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequiredDocumentConfigUpdateWithoutStageConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredDocumentConfigUncheckedUpdateWithoutStageConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequiredDocumentConfigUncheckedUpdateManyWithoutStageConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isMandatory?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}