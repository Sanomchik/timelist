let jsonData = [
{
  "timing": {
    "first_week": {
      "0": [
      {
        "name": "Л Архітектура ІТ підприемств В",
        "time": "4",
        "teacher": "Корзаченко О.В.",
        "cab": "422"
      },
      {
        "name": "П Сист підтрим прийнят рішень",
        "time": "5",
        "teacher": "Тищенко О.В.",
        "cab": "423"
      },
      {
        "name": "Лб Сист підтрим прийнят рішень",
        "time": "6",
        "teacher": "Тищенко О.В.",
        "cab": "кц2"
      }
      ],
      "1": [
      {
        "name": "Выходной",
        "time": "6",
        "teacher": " ",
        "cab": " "
      }
      ],
      "2": [
      {
        "name": "Л Моделювання систем",
        "time": "5",
        "teacher": "Скіцько В.І.",
        "cab": "424"
      },
      {
        "name": "П Технології хмарних обчислень",
        "time": "6",
        "teacher": "Камінський О.Є",
        "cab": "424"
      },
      {
        "name": "Лб Моделювання систем",
        "time": "7",
        "teacher": "Скіцько В.І.",
        "cab": "кц"
      }
      ],
      "3": [
      {
        "name": "Выходной",
        "time": "6",
        "teacher": " ",
        "cab": " "
      }
      ],
      "4": [
      {
        "name": "Выходной",
        "time": "6",
        "teacher": " ",
        "cab": " "
      }
      ]
    },
    "second_week": {
      "0": [
      {
        "name": "Лб Технології хмарних обчислень",
        "time": "3",
        "teacher": "Камінський О.Є",
        "cab": "кц"
      },
      {
        "name": "Л Моделювання систем",
        "time": "4",
        "teacher": "Скіцько В.І.",
        "cab": "424"
      },
      {
        "name": "П Архітектура ІТ підприемств В",
        "time": "5",
        "teacher": "Корзаченко О.В.",
        "cab": "424"
      },
      {
        "name": "Лб Архітектура ІТ підприемств В",
        "time": "6",
        "teacher": "Корзаченко О.В.",
        "cab": "424"
      }
      ],
      "1": [
      {
        "name": "Выходной",
        "time": "6",
        "teacher": " ",
        "cab": " "
      }
      ],
      "2": [
      {
        "name": "П Моделювання систем",
        "time": "5",
        "teacher": "Скіцько В.І.",
        "cab": "424"
      },
      {
        "name": "Лб Управл ІТ-проектами",
        "time": "6",
        "teacher": "Габрієлян Д.Г.",
        "cab": "кц"
      },
      {
        "name": "Лб Управл ІТ-проектами",
        "time": "7",
        "teacher": "Габрієлян Д.Г.",
        "cab": "кц"
      }
      ],
      "3": [
      {
        "name": "Выходной",
        "time": "6",
        "teacher": " ",
        "cab": " "
      }
      ],
      "4": [
      {
        "name": "Выходной",
        "time": "6",
        "teacher": " ",
        "cab": " "
      }
      ]
    },
    
    "time_list": [
    {
      "name": "1",
      "time": "8.30 - 9.50"
    },
    {
      "name": "2",
      "time": "10.15-11.35"
    },
    {
      "name": "3",
      "time": " 12.15-13.40"
    },
    {
      "name": "4",
      "time": "14.00-15.20"
    },
    {
      "name": "5",
      "time": "15.45-17.05"
    },
    {
      "name": "6",
      "time": "17.30-18.30"
    },
    {
      "name": "7",
      "time": "18.40-19.40"
    }
    ]
    
  }
}
];
let periodTime = [
{start: '08.30', end: '09.50'},
{start: '10.15', end: '11.35'},
{start: '12.15', end: '13.40'},
{start: '14.00', end: '15.20'},
{start: '15.45', end: '17.05'},
{start: '17.30', end: '18.30'},
{start: '18.40', end: '19.40'},
]
let Nav = React.createClass({
 getDay: function(e) {
  e.preventDefault();
  this.props.changeDay(e.target.id);
  this.props.changeStateTimeList(false);
},
getTimeList: function(e) {
  e.preventDefault();
  this.props.changeStateTimeList(true);
},
render: function () {
  return (
    <nav className="navbar navbar-default">
    <div className="container nav-container">
    <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
    <ul className="nav navbar-nav" id="startlist">
    <li><a href="#" onClick={this.getDay} id="0">Monday</a></li>
    <li><a href="#" onClick={this.getDay} id="1">Tuesday</a></li>
    <li><a href="#" onClick={this.getDay} id="2">Wednesday</a></li>
    <li><a href="#" onClick={this.getDay} id="3">Thursday</a></li>
    <li><a href="#" onClick={this.getDay} id="4">Friday</a></li>
    <li><a href="#" onClick={this.getTimeList} id="5">Time list</a></li>
    </ul>
    </div>
    </div>
    </nav>
    );
}
});
let List = React.createClass({
  render: function () {
    let dataFirstWeek = jsonData[0].timing.first_week[this.props.day];
    let dataSecondWeek = jsonData[0].timing.second_week[this.props.day];
    let arrFirstWeek = [];
    let arrSecondWeek = [];
    let currentTime = new Date().toString().substr(16,5)
    for (let keys in dataFirstWeek) {
      arrFirstWeek.push(
        <div key={keys} >
        <div className={periodTime[dataFirstWeek[keys].time-1].start < currentTime && currentTime < periodTime[dataFirstWeek[keys].time-1].end ? "col-xs-12 item current" : currentTime > periodTime[dataFirstWeek[keys].time-1].end ? "col-xs-12 item past" : "col-xs-12 item"}>
        <div className="col-xs-3 side"><h5>{dataFirstWeek[keys].time}</h5></div><div className="col-xs-6">
        <h5>{dataFirstWeek[keys].name}</h5>
        <h6>{dataFirstWeek[keys].teacher}</h6>
        </div>
        <div className="col-xs-3 side">
        <h5>{dataFirstWeek[keys].cab}</h5>
        </div>
        </div>
        </div>
        )
    }
    for (let keys in dataSecondWeek) {
      arrSecondWeek.push(
        <div key={keys} >
        <div className={periodTime[dataSecondWeek[keys].time-1].start < currentTime && currentTime < periodTime[dataSecondWeek[keys].time-1].end ? "col-xs-12 item current" : currentTime > periodTime[dataSecondWeek[keys].time-1].end ? "col-xs-12 item past" : "col-xs-12 item"}>
        <div className="col-xs-3 side"><h5>{dataSecondWeek[keys].time}</h5></div><div className="col-xs-6">
        <h5>{dataSecondWeek[keys].name}</h5>
        <h6>{dataSecondWeek[keys].teacher}</h6>
        </div>
        <div className="col-xs-3 side">
        <h5>{dataSecondWeek[keys].cab}</h5>
        </div>
        </div>
        </div>
        )
    }
    if (this.props.timeListShowNeed == false) {
      return (
        <div className="container">
        <div className="row">
        <div className="slider sliderItems">
        <div>
        <div className="col-xs-12 item item-head">
        <div className="col-xs-6 side"><h5><strong>First week</strong></h5></div>
        <div className="col-xs-6 side">
        <h5><strong>{this.props.weekDayProp[this.props.day]}</strong></h5>
        </div>
        </div>
        {arrFirstWeek}
        </div>
        <div>
        <div className="col-xs-12 item item-head">
        <div className="col-xs-6 side"><h5><strong>Second week</strong></h5></div>
        <div className="col-xs-6 side">
        <h5><strong>{this.props.weekDayProp[this.props.day]}</strong></h5>
        </div>
        </div>
        {arrSecondWeek}
        </div>
        </div>
        </div>
        </div>
        );
    }
    if (this.props.timeListShowNeed == true) { 
      $('.sliderItems').slick('unslick');
      $('.active').removeClass('active');
      $('#5').parent().addClass('active');
      return (
        <div className="container">
        <div className="row timing">
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>1</h5>
        </div>
        <div className="col-xs-6">
        <h5>8.30 - 9.50</h5>
        </div>
        </div>
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>2</h5>
        </div>
        <div className="col-xs-6">
        <h5>10.15-11.35</h5>
        </div>
        </div>
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>3</h5>
        </div>
        <div className="col-xs-6">
        <h5> 12.15-13.40</h5>
        </div>
        </div>
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>4</h5>
        </div>
        <div className="col-xs-6">
        <h5>14.00-15.20</h5>
        </div>
        </div>
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>5</h5>
        </div>
        <div className="col-xs-6">
        <h5>15.45-17.05</h5>
        </div>
        </div>
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>6</h5>
        </div>
        <div className="col-xs-6">
        <h5>17.30-18.30</h5>
        </div>
        </div>
        <div className="col-xs-12 item ">
        <div className="col-xs-6 side">
        <h5>7</h5></div>
        <div className="col-xs-6">
        <h5>18.40-19.40</h5>
        </div>
        </div>
        </div>
        </div>
        );
    }
  }
});
let App = React.createClass({
  getInitialState: function() {
    return { 
      day: new Date().getDay()-1,
      timeListShow: false,
      weekDayArr: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    };
  },
  componentDidMount: function() {
    $('.loader').fadeOut();
    $('.loader_inner').delay(1000).fadeOut('slow');
    $('body').delay(1000).css({'overflow':'visible'});
    $('.sliderItems').slick({
      arrows: false,
      slidesToShow: 1
    });
    let currentDay = new Date().getDay()-1;
    $('#'+currentDay).parent().addClass('active');
  },
  componentDidUpdate: function() {
    $('.sliderItems').slick('unslick');
    $('.sliderItems').slick({
      arrows: false,
      slidesToShow: 1
    });
  },
  setDay: function(day) {
   this.setState({
    day: day
  })
   $('.active').removeClass('active');
   $('#'+day).parent().addClass('active');
   if (document.body.clientWidth < 757) {
     $('.btn-navbar').click(); 
     $('.navbar-toggle').click() 
   }
 },
 timeListShow: function(v) {
   this.setState({
    timeListShow: v
  })
 },
 render: function () {
  let currentDay = this.state.day;
  let timeListShowNeedValue = this.state.timeListShow;
  let weekDayList = this.state.weekDayArr;
  return (
    <div>
    <Nav changeDay={this.setDay} changeStateTimeList={this.timeListShow} />
    <List day={currentDay} weekDayProp={weekDayList} timeListShowNeed={timeListShowNeedValue}/>
    </div>
    );
}
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
  )
;
