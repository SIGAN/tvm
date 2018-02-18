import { SSL_OP_ALL } from 'constants';

/**
 * Type of aggregation for the column that should be used during grouping
 *
 * @export
 * @enum {number}
 */
export enum AggregationTypes {
  None,
  Count,
  Sum,
  Avg
}

/**
 * Column Schema Definition
 *
 * @export
 * @interface ColumnSchema
 */
export interface ColumnSchema {
  /**
   * Type of aggregation to use for this column
   *
   * @type {AggregationTypes}
   * @memberof ColumnSchema
   */
  aggregation: AggregationTypes

  /**
   * Internal name of the column
   *
   * @type {string}
   * @memberof ColumnSchema
   */
  name: string

  /**
   * Public title of the column
   *
   * @type {string}
   * @memberof ColumnSchema
   */
  title: string
}
