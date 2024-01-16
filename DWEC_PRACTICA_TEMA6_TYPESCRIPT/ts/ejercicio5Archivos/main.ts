import Laptop from "./laptop";
import Smartphone from "./smartphone";

var laptop:Laptop=new Laptop("lenovo", true,"Yoga");
var smartphone:Smartphone=new Smartphone("GT3",false,"Huawei")

laptop.toOpenProgramme();
laptop.turnOn();
laptop.turnOff();

smartphone.turnOff();
smartphone.turnOn();
smartphone.toCall();