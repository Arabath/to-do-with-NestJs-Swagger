"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionalRepository = void 0;
const typeorm_1 = require("typeorm");
class TransactionalRepository extends typeorm_1.Repository {
    constructor(entityClass, repository) {
        super(repository.target, repository.manager, repository.queryRunner);
        this.entityClass = entityClass;
        this.repository = repository;
    }
    fromEntityManager(entityManager, constr) {
        return constr(entityManager.getRepository(this.entityClass));
    }
}
exports.TransactionalRepository = TransactionalRepository;
//# sourceMappingURL=transactional-repository.js.map