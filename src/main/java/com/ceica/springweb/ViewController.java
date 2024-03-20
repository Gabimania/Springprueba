package com.ceica.springweb;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Controller
public class ViewController {
    @GetMapping("/index")
    public String index(Model model){
        String nombre = "Gabriel";
        model.addAttribute("name", nombre);
        return "index";
    }

    @PostMapping("/form")
    public String login(@RequestParam String nombre, @RequestParam String password, Model model){
    if(nombre.equals("admin") & password.equals("1234")){
        return "redirect:/administrator";

    }else{
        model.addAttribute("msg", "Usuario o Contraseña incorrectos");
        return "index";
    }

    }

    @PostMapping("/formtask")
    public String crearTarea(@RequestParam String titulo, @RequestParam String descripcion, @RequestParam String fecha, Model model) {
        Tarea tarea = new Tarea(titulo, descripcion, LocalDate.parse(fecha));
        System.out.println(tarea.toString());
        model.addAttribute("tarea", tarea);
        model.addAttribute("mensaje", "Tarea creada exitosamente");
        return "index";
    }

}
