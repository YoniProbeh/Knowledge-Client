export abstract class BaseModel {
    id?: number;
    guid?: string;
    created?: Date;
    name?: string;
    title?: string;
    isActive?: boolean;
    activeSince?: Date;
    activeLast?: Date;
}
export class Model<T extends BaseModel> extends BaseModel {
    parent?: T;
    children?: Array<T>;
}