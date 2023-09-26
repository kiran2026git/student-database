package com.kiran.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kiran.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
