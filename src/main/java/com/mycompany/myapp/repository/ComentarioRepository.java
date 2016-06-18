package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Comentario;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Comentario entity.
 */
@SuppressWarnings("unused")
public interface ComentarioRepository extends JpaRepository<Comentario,Long> {

}
