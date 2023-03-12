import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { Nav } from './nav';
import { Head } from './head1';
import { Input } from './input';
import  pic1 from './mag.png';
import  pic2 from './grocery.jpg';
import  pic3 from './electronics.jpg';
import  pic4 from './pharm.jpg';
import pic5 from './lacto.png'
import pic6 from './olper.jpg'
import pic7 from './sunridge.jpeg'
import pic8 from './fam.jpeg'
import pic9 from './day.jpeg'
import pic10 from './king.png'
import pic11 from './cheddar.png'
import pic12 from './pudding.png'
import pic13 from './bloom.png'
import pic14 from './dispenser.jpg'
import pic15 from './tv.jpeg'
import pic16 from './purifier.jpeg'
import pic17 from './oven.jpeg'
import pic18 from './cyc.png'
import pic19 from './zia.png'
import pic20 from './thy.png'
import pic21 from './wil.png'
import { Head2 } from './head2';
import { Div2 } from './Div2';
import { Div3 } from './Div3';
import { Prod } from './prodhead';
import { Small } from './choti';
import { Sold } from './sold';
import { Recommend } from './recommend';
import { Data } from './data';


function App() {
  return (
    <div className="App">
    <Header text="Airlift Express"></Header>
    <Head text="50% OFF SALE"></Head>
    <Input src={pic1}/>
    <Nav text1={"Products"} text2={"#hy1"}/>
    <Nav text1={"Category"} text2={"#Prod"}/>
    <Nav text1={"RecentlySoldProducts"} text2={"#sold1"}/>
    <Nav text1={"PopularProducts"} text2={"#recom1"}/>
    <Head2 text={"What would you like to order today?"}/>
    <Div2 text={"GROCERY"} src={pic2} text1={"View All >"}/>
    <Div2 text={"ELECTRONICS" }src={pic3} text1={"View All >"}/>
    <Div2 text={"PHARMACY"} src={pic4} text1={"View All >"}/>
    <Head2 text={"RECOMMENDED FOR YOU"}/>
    <Recommend text={"Popular products"}/>
    <Div3 text1={"Lactogrow"} text4={Data[0].brand} text5={Data[0].quantity} but1={"Add to cart"} src={pic5} text2={"Rs 120"} text3={""}/>
    <Div3 text1={"Olpers"} text4={Data[1].brand} text5={Data[1].quantity} but1={"Add to cart"} src={pic6} text2={"Rs 200"} text3={""}/>
    <Div3 text1={"Sunridge"} text4={Data[2].brand} text5={Data[2].quantity} but1={"Add to cart"} src={pic7} text2={"Rs 150"} text3={""}/>
    <Div3 text1={"Family Mixture"} text4={Data[3].brand} text5={Data[3].quantity} but1={"Add to cart"} src={pic8} text2={"Rs 300"} text3={""}/>
    <Div3 text1={"Day Fresh"} text4={Data[4].brand} text5={Data[4].quantity} but1={"Add to cart"} src={pic9} text2={"Rs 125"} text3={""}/>
    <Prod text={"PRODUCTS"}/> 
    <Small text={"GROCERY"}/>
    <Div3 text1={"King AirFreshner"} text4={Data[5].brand} text5={Data[5].quantity} but1={"Add to cart"} src={pic10} text2={"Rs 120"} text3={"Available"}/>
    <Div3 text1={"Cheddar Cheese"} text4={Data[6].brand} text5={Data[6].quantity} but1={"Add to cart"} src={pic11} text2={"Rs 400"} text3={"Sold"}/>
    <Div3 text1={"Banana Pudding"} text4={Data[7].brand} text5={Data[7].quantity} but1={"Add to cart"} src={pic12} text2={"Rs 150"} text3={"Available"}/>
    <Div3 text1={"Bloom Olives"} text4={Data[8].brand} text5={Data[8].quantity} but1={"Add to cart"} src={pic13} text2={"Rs 300"} text3={"Available"}/>
   
    <Small text={"ELECTRONICS"}/>
    <Div3 text1={"Dispenser"} text4={Data[9].brand} text5={Data[9].quantity} but1={"Add to cart"} src={pic14} text2={"Rs 120000"} text3={"Available"}/>
    <Div3 text1={"LED TV"} text4={Data[10].brand} text5={Data[10].quantity} but1={"Add to cart"} src={pic15} text2={"Rs 20000"} text3={"Sold"}/>
    <Div3 text1={"Air purifier"} text4={Data[11].brand} text5={Data[11].quantity} but1={"Add to cart"} src={pic16} text2={"Rs 15000"} text3={"Available"}/>
    <Div3 text1={"Microwave Oven"} text4={Data[12].brand} text5={Data[12].quantity} but1={"Add to cart"} src={pic17} text2={"Rs 30000"} text3={"Available"}/>
   
    <Small text={"PHARMACY"}/>
    <Div3 text1={"Cyclogest"} text4={Data[13].brand} text5={Data[13].quantity} but1={"Add to cart"} src={pic18} text2={"Rs 120"} text3={"Available"}/>
    <Div3 text1={"Thyroxine"} text4={Data[14].brand} text5={Data[14].quantity} but1={"Add to cart"} src={pic19} text2={"Rs 200"} text3={"Sold"}/>
    <Div3 text1={"Ziapire"} text4={Data[15].brand} text5={Data[15].quantity} but1={"Add to cart"} src={pic20} text2={"Rs 150"} text3={"Available"}/>
    <Div3 text1={"Wilsop"}text4={Data[16].brand} text5={Data[16].quantity}  but1={"Add to cart"} src={pic21} text2={"Rs 300"} text3={"Available"}/>
   
    <Prod text={"SOLD OUT PRODUCTS"}/> 
    <Sold text={"Out of stock"}/>
    <Div3 text1={"Olpers"} text4={Data[1].brand} text5={Data[1].quantity} but1={"Add to cart"} src={pic6} text2={"Rs 200"} text3={"Sold"}/>
    <Div3 text1={"Day Fresh"} text4={Data[4].brand} text5={Data[4].quantity} but1={"Add to cart"} src={pic9} text2={"Rs 125"} text3={"Sold"}/>
    <Div3 text1={"LED TV"} text4={Data[10].brand} text5={Data[10].quantity} but1={"Add to cart"} src={pic15} text2={"Rs 20000"} text3={"Sold"}/>
    <Div3 text1={"Thyroxine"} text4={Data[14].brand} text5={Data[14].quantity} but1={"Add to cart"} src={pic19} text2={"Rs 170"} text3={"Sold"}/>

    </div>
  );
}
export default App;
