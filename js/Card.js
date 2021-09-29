class CardComponent{
  constructor(title, timeframe, current, previous){
    this.cls = this._createCSSclsName(title);
    this.title = title;
    this.timeframe = timeframe;
    this.current = current;
    this.previous = previous;
  }
  
  _createCSSclsName(str){
    return str.toLowerCase().split(' ').join('');
  }
  _generatePreviousString(timeframe){
    switch(timeframe){
      case 'daily':
        return 'Yesterday';
        break;
      case 'weekly':
        return 'Last Week';
        break;
      case 'monthly':
        return 'Last Month';
        break;
    }
  }
  _formatHours(hour){
    switch(hour){
      case 0:
        return '0hr';
        break;
      case 1:
        return '1hr';
        break;
      default:
        return `${hour}hrs`;
    }
  }
  createHTML(){
    let svg;
    if(this.cls ==="selfcare"){
      svg = "self-care";
    }
    return `
      <article class="dashboard__card ${this.cls}-card">
          <figure class="card-img">
            <img src="./images/icon-${this.cls === "selfcare" ? "self-care": this.cls}.svg" alt="icon-${this.cls}" class="card-img__img">
          </figure>

          <div class="card-content card-content-${this.title}">
            <div class="title-container">
              <h3 class="dashboard__card__title">${this.title}</h3>
              <figure class="ellipsis">
                <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
              </figure>
            </div>
            <div class="timeframe-container">
              <p class="dashboard__card__timeframe">${this._formatHours(this.current)}</p>
              <p class="dashboard__card__previous">${this._generatePreviousString(this.timeframe)} - ${this._formatHours(this.previous)}</p>
            </div>
          </div>
        </article>
      `;
  }
}

export default CardComponent;