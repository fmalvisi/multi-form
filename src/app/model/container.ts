export interface Container {
  outerList?: Array<OuterObject>
}
export interface OuterObject {
  outerObjectID: string;
  optionalNumericalField?: string;
  innerList?: Array<InnerObject>;
}

export interface InnerObject {
  innerObjectID: string;
}
