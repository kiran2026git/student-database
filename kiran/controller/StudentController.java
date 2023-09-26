package com.kiran.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiran.exception.UserNotFoundException;
import com.kiran.model.Student;
import com.kiran.repository.StudentRepository;
@CrossOrigin("http://localhost:3000")
@RestController

public class StudentController {
   @Autowired
   private StudentRepository studentRepository;
   
   @PostMapping("/student")
   Student addStudent(@RequestBody Student addStudent) {
	   return studentRepository.save(addStudent);
   }
   
   @GetMapping("/students")
   List<Student> getStudents(){
	   return studentRepository.findAll();
   }
   
   @GetMapping("/student/{id}")
   Student getStudentById(@PathVariable Long id) {
       return studentRepository.findById(id)
               .orElseThrow(() -> new UserNotFoundException(id));
   }
   
   @PutMapping("/student/{id}")
   Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
       return studentRepository.findById(id)
               .map(student -> {
                   student.setUsername(newStudent.getUsername());
                   student.setName(newStudent.getName());
                   student.setEmail(newStudent.getEmail());
                   return studentRepository.save(student);
               }).orElseThrow(() -> new UserNotFoundException(id));
   }
   
   @DeleteMapping("/student/{id}")
   String deleteStudent(@PathVariable Long id){
       if(!studentRepository.existsById(id)){
           throw new UserNotFoundException(id);
       }
       studentRepository.deleteById(id);
       return  "User with id "+id+" has been deleted success.";
   }

}
