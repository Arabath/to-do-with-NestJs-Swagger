import { EntityManager, ObjectType, Repository } from "typeorm";
export declare abstract class TransactionalRepository<T, TargetRepo> extends Repository<T> {
    private readonly entityClass;
    private readonly repository;
    protected constructor(entityClass: ObjectType<T>, repository: Repository<T>);
    abstract transactional(entityManager: EntityManager): TargetRepo;
    protected fromEntityManager(entityManager: EntityManager, constr: (repository: Repository<T>) => TargetRepo): TargetRepo;
}
