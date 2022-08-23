import React from "react";
import ReactDOM from "react-dom/client";

export default function Light({ cumle, text }) {
  const highlight = (cumle, text) => {
    text = text.toLowerCase();
    const splitedCumle = cumle.split("");
    const lowerCaseSplitedCumle = cumle.toLowerCase().split("");
    let enter = true;
    const indexArray = [];
    let htmlText = "";

    for (let i = 0; i < lowerCaseSplitedCumle.length; i++) {
      enter = true;
      for (let j = 0; j < text.length; j++) {
        if (lowerCaseSplitedCumle[i + j] !== text[j]) {
          enter = false;
          break;
        }
      }
      if (enter) {
        for (let j = 0; j < text.length; j++) {
          indexArray.push(i + j);
        }
      }
    }

    for (let i = 0; i < splitedCumle.length; i++) {
      if (indexArray.includes(i)) {
        htmlText += `<span style="background-color: yellow">${splitedCumle[i]}</span>`;
      } else {
        htmlText += splitedCumle[i];
      }
    }
    return { __html: htmlText };
  };

  return <div dangerouslySetInnerHTML={highlight(cumle, text)}></div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const cumle =
  "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.";
const text = "lorem ipsum";

root.render(<Light cumle={cumle} text={text} />);
