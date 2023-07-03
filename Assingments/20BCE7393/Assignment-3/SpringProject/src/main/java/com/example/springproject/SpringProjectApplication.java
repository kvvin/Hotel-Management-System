    package com.example.springproject;

    import com.example.springproject.Employee.user;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.boot.CommandLineRunner;
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;

    @SpringBootApplication
    public class SpringProjectApplication implements CommandLineRunner {

       @Autowired
        private user u;
        public static void main(String[] args) {


            SpringApplication.run(SpringProjectApplication.class, args);
        }


        @Override
        public void run(String... args) throws Exception {
            System.out.println(this.u.createTable());
        }
    }
