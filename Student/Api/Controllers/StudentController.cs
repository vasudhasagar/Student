using Api.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class StudentController : ControllerBase
    {
        private StudentDBContext context;
        public StudentController()
        {
            ConnectionFactory factory = new ConnectionFactory();
            context = factory.CreateContext();
        }
        // GET: api/Student
        [HttpGet]
        public Student[] Get()
        {
            Student[] students = null;
            try
            {
                students = context.Student.ToArray();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return students;
        }

        // GET: api/Student/5
        [HttpGet("{id}", Name = "Get")]
        public Student Get(int id)
        {
            Student student = null;
            try
            {
                student = context.Student.Where(st => st.ID == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return student;
        }

        // POST: api/Student
        [HttpPost]
        public void Post([FromBody] Student value)
        {
            try
            {
                context.Student.Add(value);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Student value)
        {
            try
            {
                Student student = context.Student.Where(s => s.ID == id).FirstOrDefault();
                if (student != null)
                {
                    student.Name = value.Name;
                    student.Grade = value.Grade;
                    student.School = value.School;

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            try
            {
                Student student = context.Student.Where(s => s.ID == id).FirstOrDefault();
                if (student != null)
                {
                    context.Student.Remove(student);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
