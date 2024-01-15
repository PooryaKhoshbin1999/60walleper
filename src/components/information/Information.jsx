import React, { useState } from "react";
import { photos } from "../../constant";

const firstParagraph = [
  { text: "" },
  { text: "B" },
  { text: "Be" },
  { text: "Bes" },
  { text: "Best" },
  { text: "Best " },
  { text: "Best W" },
  { text: "Best Wa" },
  { text: "Best Wal" },
  { text: "Best Wall" },
  { text: "Best Walle" },
  { text: "Best Wallep" },
  { text: "Best Wallepe" },
  { text: "Best Walleper" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Wallepers" },
  { text: "Best Walleper" },
  { text: "Best Wallepe" },
  { text: "Best Wallep" },
  { text: "Best Walle" },
  { text: "Best Wall" },
  { text: "Best Wal" },
  { text: "Best Wa" },
  { text: "Best W" },
  { text: "Best " },
  { text: "Best" },
  { text: "Bes" },
  { text: "Be" },
  { text: "B" },
  { text: "" },
  { text: "" },
];

const secondParagraph = [
  {text : ''},
  {text : 'Y'}, 
  {text : 'Yo'},
  {text : 'You'},
  {text : 'You '},
  {text : 'You c'},
  {text : 'You ca'},
  {text : 'You can'},
  {text : 'You can '},
  {text : 'You can d'},
  {text : 'You can do'},
  {text : "You can dow"},
  {text : 'You can down'},
  {text : 'You can downl'},
  {text : 'You can downlo'},
  {text : 'You can downloa'},
  {text : 'You can download'},
  {text : 'You can download W'},
  {text : 'You can download Wa'},
  {text : 'You can download Wal'},
  {text : 'You can download Wall'},
  {text : 'You can download Walle'},
  {text : 'You can download Wallep'},
  {text : 'You can download Wallepe'},
  {text : 'You can download Walleper'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Wallepers'},
  {text : 'You can download Walleper'},
  {text : 'You can download Wallepe'},
  {text : 'You can download Wallep'},
  {text : 'You can download Walle'},
  {text : 'You can download Wall'},
  {text : 'You can download Wal'},
  {text : 'You can download Wa'},
  {text : 'You can download W'},
  {text : 'You can download '},
  {text : 'You can download'},
  {text : 'You can downloa'},
  {text : 'You can downlo'},
  {text : 'You can downl'},
  {text : 'You can down'},
  {text : 'You can dow'},
  {text : 'You can do'},
  {text : 'You can d'},
  {text : 'You can '},
  {text : 'You can'},
  {text : 'You ca'},
  {text : 'You c'},
  {text : 'You '},
  {text : 'You'},
  {text : 'Yo'},
  {text : 'Y'},
  {text : ''},
  {text : ''},
]

const thirdParagraph = [
  {text : ''},
  {text : 'V'},
  {text : 'Va'},
  {text : 'Var'},
  {text : 'Vari'},
  {text : 'Vario'},
  {text : 'Variou'},
  {text : 'Various'},
  {text : 'Various '},
  {text : 'Various C'},
  {text : 'Various Ca'},
  {text : 'Various Cat'},
  {text : 'Various Cate'},
  {text : 'Various Categ'},
  {text : 'Various Catego'},
  {text : 'Various Categor'},
  {text : 'Various Categori'},
  {text : 'Various Categorie'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categories'},
  {text : 'Various Categorie'},
  {text : 'Various Categori'},
  {text : 'Various Categor'},
  {text : 'Various Catego'},
  {text : 'Various Categ'},
  {text : 'Various Cate'},
  {text : 'Various Cat'},
  {text : 'Various Ca'},
  {text : 'Various C'},
  {text : 'Various '},
  {text : 'Various'},
  {text : 'Variou'},
  {text : 'Vario'},
  {text : 'Vari'},
  {text : 'Var'},
  {text : 'Va'},
  {text : 'V'},
  {text : ''},
  {text : ''},
  {text : ''},
  {text : ''},
]

const forthParagraph = [
  {text : ''},
  {text : 'A'},
  {text : 'An'},
  {text : 'Ani'},
  {text : 'Anim'},
  {text : 'Anima'},
  {text : 'Animal'},
  {text : 'Animal\''},
  {text : 'Animal\'s'},
  {text : 'Animal\'s '},
  {text : 'Animal\'s P'},
  {text : 'Animal\'s Pi'},
  {text : 'Animal\'s Pic'},
  {text : 'Animal\'s Pict'},
  {text : 'Animal\'s Pictu'},
  {text : 'Animal\'s Pictur'},
  {text : 'Animal\'s Picture'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Pictures'},
  {text : 'Animal\'s Picture'},
  {text : 'Animal\'s Pictur'},
  {text : 'Animal\'s Pictu'},
  {text : 'Animal\'s Pict'},
  {text : 'Animal\'s Pic'},
  {text : 'Animal\'s Pi'},
  {text : 'Animal\'s P'},
  {text : 'Animal\'s '},
  {text : 'Animal\'s'},
  {text : 'Animal\''},
  {text : 'Animal'},
  {text : 'Anima'},
  {text : 'Anim'},
  {text : 'Ani'},
  {text : 'An'},
  {text : 'A'},
  {text : ''},
  {text : ''},
  {text : ''},
  {text : ''},
]

const fifthParagraph = [
  {text : ''},
  {text : 'A'},
  {text : 'An'},
  {text : 'Ani'},
  {text : 'Anim'},
  {text : 'Anima'},
  {text : 'Animat'},
  {text : 'Animati'},
  {text : 'Animatio'},
  {text : 'Animation'},
  {text : 'Animation '},
  {text : 'Animation\''},
  {text : 'Animation\'s'},
  {text : 'Animation\'s '},
  {text : 'Animation\'s P'},
  {text : 'Animation\'s Pi'},
  {text : 'Animation\'s Pic'},
  {text : 'Animation\'s Pict'},
  {text : 'Animation\'s Pictu'},
  {text : 'Animation\'s Pictur'},
  {text : 'Animation\'s Picture'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Pictures'},
  {text : 'Animation\'s Picture'},
  {text : 'Animation\'s Pictur'},
  {text : 'Animation\'s Pictu'},
  {text : 'Animation\'s Pict'},
  {text : 'Animation\'s Pic'},
  {text : 'Animation\'s Pi'},
  {text : 'Animation\'s P'},
  {text : 'Animation\'s '},
  {text : 'Animation\'s'},
  {text : 'Animation\''},
  {text : 'Animation'},
  {text : 'Animatio'},
  {text : 'Animati'},
  {text : 'Animat'},
  {text : 'Anima'},
  {text : 'Anim'},
  {text : 'Ani'},
  {text : 'An'},
  {text : 'A'},
  {text : ''},
  {text : ''},
  {text : ''},
  {text : ''},
]

const sixthParagraph = [
  {text : ''},
  {text : 'S'},
  {text : 'Sp'},
  {text : 'Spe'},
  {text : 'Spec'},
  {text : 'Speci'},
  {text : 'Specif'},
  {text : 'Specifi'},
  {text : 'Specific'},
  {text : 'Specific '},
  {text : 'Specific P'},
  {text : 'Specific Pi'},
  {text : 'Specific Pic'},
  {text : 'Specific Pict'},
  {text : 'Specific Pictu'},
  {text : 'Specific Pictur'},
  {text : 'Specific Picture'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Pictures'},
  {text : 'Specific Picture'},
  {text : 'Specific Pictur'},
  {text : 'Specific Pictu'},
  {text : 'Specific Pict'},
  {text : 'Specific Pic'},
  {text : 'Specific Pi'},
  {text : 'Specific P'},
  {text : 'Specific '},
  {text : 'Specific'},
  {text : 'Specifi'},
  {text : 'Specif'},
  {text : 'Speci'},
  {text : 'Spec'},
  {text : 'Spe'},
  {text : 'Sp'},
  {text : 'S'},
  {text : ''},
  {text : ''},
  {text : ''},
  {text : ''},
]

const seventhParagraph = [
  {text : ''},
  {text : 'E'},
  {text : 'En'},
  {text : 'Enj'},
  {text : 'Enjo'},
  {text : 'Enjoy'},
  {text : 'Enjoy '},
  {text : 'Enjoy i'},
  {text : 'Enjoy it '},
  {text : 'Enjoy it !'},
  {text : 'Enjoy it !!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!!'},
  {text : 'Enjoy it !!'},
  {text : 'Enjoy it !'},
  {text : 'Enjoy it '},
  {text : 'Enjoy it'},
  {text : 'Enjoy i'},
  {text : 'Enjoy '},
  {text : 'Enjoy'},
  {text : 'Enjo'},
  {text : 'Enj'},
  {text : 'En'},
  {text : 'E'},
  {text : ''},
  {text : ''},
  {text : ''},
  {text : ''},
]

let i = 0;
let j = 0;

const Information = () => {
  const [image, setImage] = useState(photos[12].src);
  const [visibility, setVisibility] = useState("opacity-100");

  const [paragraph , setParagraph] = useState(firstParagraph)
  const [textTwo, setTextTwo] = useState(paragraph[j].text);

  

  

  return (
    <div className="flex flex-col mt-[1.3rem] md:flex-row md:mt-[5rem] md:mb-[6rem] md:items-center lg:mb-[7.5rem]
     lg:mt-[6rem]">
      <div
        className="border-[2px] opacity-70 border-sky w-full rounded-[20px] md:w-[300px] lg:w-[400px]
        2xl:w-[505px] 2xl:ml-[12rem]"
        onLoad={() => {
          setTimeout(createAnimation, 10000);
        }}
      >
        <img
          src={image}
          alt="img"
          onLoad={() => {
            setTimeout(visibilityAction, 9700);
          }}
          className={`${visibility} transition-all w-[500px] rounded-[18px]`}
        />
      </div>
<div className="flex justify-center h-[30vh] items-center md:justify-start md:ml-[1rem] md:w-[400px] 
lg:w-[700px] lg:ml-[3rem] 2xl:w-[1500px] ">

<div className="">
<p className="text-[30px] text-center text-sky font-link md:text-[40px] lg:text-[50px]
2xl:text-[120px]" 
onLoad={setTimeout(textAnimation, 200)}>{textTwo}</p>
</div>

</div>
      
    </div>
  );

  function textAnimation() {
    if (j < paragraph.length - 1) {
      setTextTwo(paragraph[j].text);
      j++;
    } else {
      if(paragraph == firstParagraph){
      setParagraph(secondParagraph);
      j = 0;
      } else if(paragraph == secondParagraph) {
        setParagraph(thirdParagraph);
        j = 0;
      } else if(paragraph == thirdParagraph) {
        setParagraph(forthParagraph)
        j = 0;
      } else if(paragraph == forthParagraph){
        setParagraph(fifthParagraph)
        j = 0;
      } else if (paragraph == fifthParagraph) {
        setParagraph(sixthParagraph)
        j = 0;
      } else if (paragraph == sixthParagraph) {
        setParagraph(seventhParagraph);
        j = 0;
      } else {
        setParagraph(firstParagraph);
        j = 0;
      }
    }
  }
  

  function createAnimation() {
    const index = Math.floor(Math.random() * photos.length);
    setImage(photos[index].src);
    setVisibility("opacity-100");
  }
  function visibilityAction() {
    setVisibility("opacity-0");
  }
  
  
  
};

export default Information;
