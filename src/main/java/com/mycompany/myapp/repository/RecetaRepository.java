package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Comentario;
import com.mycompany.myapp.domain.Receta;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Receta entity.
 */
@SuppressWarnings("unused")
public interface RecetaRepository extends JpaRepository<Receta,Long> {

   /* @Query("select receta, comentario from Comentario comentario, Receta receta where receta.id=comentario.receta.id and receta.id=:id")
    Page<Comentario> findRecetasComentarios(@Param("id") long id, Pageable pageable);

    /*
 @Query("select jugador from Jugador jugador where jugador.asistencias >=:totalAsist")
    Page<Jugador> Asist(@Param("totalAsist") Integer totalAsist, Pageable pageable);
 */

}
