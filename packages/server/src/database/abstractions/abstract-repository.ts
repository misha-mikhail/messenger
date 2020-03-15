import { ReturnModelType } from '@typegoose/typegoose';

// TODO: implement repositories for all models.
export interface AbstractRepository<TEntity extends new(...args: any) => TEntity> {
    model: ReturnModelType<TEntity>;
}