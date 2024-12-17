import { render, screen } from "@testing-library/react";
import MyNameComp from "../component/MyNameComp";

describe('MyName Component', () => {
    
    test("render myname comp ", ()=>{
        render(<MyNameComp name="Bejesh" post="Developer"/>);
    
        let createElement = screen.getByText("About");
        expect(createElement).toBeInTheDocument();
    })
    
    test("render with name prop ", ()=>{
        render(<MyNameComp name="Bejesh" post="Developer"/>);
    
        let createElement = screen.getByText("my name Bejesh");
        expect(createElement).toBeInTheDocument();
    })
    
    test("render with name post ", ()=>{
        render(<MyNameComp name="Bejesh" post="Developer"/>);
    
        let createElement = screen.getByText("I AM A Developer");
        expect(createElement).toBeInTheDocument();
    })
    
});