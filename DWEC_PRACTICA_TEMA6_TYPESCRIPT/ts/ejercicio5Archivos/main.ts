import Laptop from "./laptop";
import Smartphone from "./smartphone";

var laptop:Laptop=new Laptop("lenovo", true,"Yoga");
var smartphone:Smartphone=new Smartphone("GT3",false,"Huawei")

laptop.abrirPrograma();
laptop.encender();
laptop.apagar();

smartphone.apagar();
smartphone.encender();
smartphone.llamar();