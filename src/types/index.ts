/**
 * Backend format for response
 */
export type Response<T> = {
   message?: string
   data: T
}

/**
 * Utilities
 */
type Primitives = string | number | symbol

/**
 * If first argument is empty string, avoid using dot (.)
 * If first argument is non empty string concat two arguments andput dot (.)
 * between them
 */
type Concat<Fst, Scd> = Fst extends string
   ? Scd extends string
      ? Fst extends ''
         ? `${Scd}`
         : `${Fst}.${Scd}`
      : never
   : never

/**
 * Obtain union of all possible paths
 */
export type KeysUnion<T, Cache extends string = ''> = T extends Primitives
   ? Cache
   : {
        [P in keyof T]: Concat<Cache, P> | KeysUnion<T[P], Concat<Cache, P>>
     }[keyof T]
