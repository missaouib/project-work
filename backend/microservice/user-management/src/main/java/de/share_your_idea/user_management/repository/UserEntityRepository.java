package de.share_your_idea.user_management.repository;

import de.share_your_idea.user_management.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findUserEntityByUsername(String username);

    @Modifying
    @Transactional(readOnly = false)
    int deleteUserEntityByUsername(String username);
}
