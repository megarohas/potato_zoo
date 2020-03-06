import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Fireworks } from "fireworks/lib/react";

class Congrat extends React.Component {
  // const Congrat = ({ user }) => {
  constructor(props) {
    super(props);
    this.audio = new Audio("/bd_song.mp3");
    this.state = {
      firework_state: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ firework_state: false });
    }, 5000);

    this.audio.play();
  }

  render() {
    let fxProps = {
      count: 1,
      interval: 200,
      colors: ["#ffee00", "#4CAF50", "#81C784"],
      calc: (props, i) => ({
        ...props,
        x: (i + 1) * (window.innerWidth / 2) - i * 100,
        // x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
        y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
      })
    };
    return (
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.65)",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px 0px",
          width: "calc(100% - 40px)"
        }}
      >
        {this.state.firework_state && <Fireworks {...fxProps} />}
        <h3 style={{ fontWeight: "400", textAlign: "justify" }}>
          Картошечка. Ты самое дорогое, что у меня есть. Я тебя неимоверно
          люблю. Представляешь, как непривычно писать русский текст во время
          того, как пишешь код? Очень непривычно, короче. Сегодня замечательный
          день (или еще ночь, я не знаю, когда ты это откроешь), в который я
          хочу пожелать тебе, чтобы все было классно. А еще меня пацаны
          попросили передать - "уальлд ьцц улдць лцудуць алцуа цудал цла, пи
          пипи пи пипи пип пи", я не знаю, что это значит, они, определенно, не
          умеют пользоваться клавиатурой, но мне кажется, что они сказали, что
          очень тебя любят и желают тебе только хорошего, а еще хоят есть...
          очень сильно хотят... могла бы уже встать и покормить их... ну... хотя
          бы Ивасика. Я благодарен всему, чему можно быть благодарным, за то,
          что я тебя встретил, иначе просто не могло быть. Писать текст намного
          проще, чем говорить его. Только представлю, стою как дебил, мямлю:
          "Мээээ, Картошечка, мэээ, ты, мэээээ, самое, мэээээ", ужасно. Крепко
          тебя целую (когда это прочтешь - поверниcь ко мне). Твой Леша (aka
          Кутила, ну, ты поняла).
        </h3>
        <h3 style={{ fontWeight: "400", textAlign: "justify" }}>
          PS. Загляни под кровать - там лежит небольшой подарок от меня. ЛЮБИТЬ.
        </h3>
      </div>
    );
  }
}

export default Congrat;
