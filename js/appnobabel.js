let jsonData = [
{
  "timing": {
    "first_week": {
      "0": [
      {
        "name": "Лб1 Створення власного ІТ-бізнесу В",
        "time": "2",
        "teacher": "ас. Габрієлян Д.Г",
        "cab": "кц2"
      },
      {
        "name": "Сист обробл екон інформ",
        "time": "3",
        "teacher": "проф. Сендзюк М.А",
        "cab": "420"
      }
      ],
      "1": [
      {
        "name": "Лб1 Технології комп проектування",
        "time": "1",
        "teacher": "ас. Тищенко О.В",
        "cab": "кц4"
      },
      {
        "name": "П Технології комп проектування",
        "time": "2",
        "teacher": "ас. Тищенко О.В",
        "cab": "422"
      },
      {
        "name": "Л Сист штучного інтелекту",
        "time": "3",
        "teacher": "проф. Іванченко Г.Ф",
        "cab": "416"
      }
      ],
      "2": [
      {
        "name": "Л Статистика В",
        "time": "2",
        "teacher": "ст.в. Столєтова І.Г",
        "cab": "420"
      },
      {
        "name": "Лб1 Сист штучного інтелекту",
        "time": "3",
        "teacher": "проф. Іванченко Г.Ф",
        "cab": "кц3"
      },
      {
        "name": "Л Технології комп проектування",
        "time": "4",
        "teacher": "доц. Денiсова О.О",
        "cab": "423"
      }
      ],
      "3": [
      {
        "name": "ВЫХОДНОЙ",
        "time": "",
        "teacher": "",
        "cab": ""
      }
      ],
      "4": [
      {
        "name": "П Статистика В",
        "time": "3",
        "teacher": "ст.в. Столєтова І.Г",
        "cab": "406"
      },
      {
        "name": "Лб1 Сист обробл екон інформ",
        "time": "4",
        "teacher": "ас. Науменко І.В",
        "cab": "кц1"
      }
      ]
    },
    "second_week": {
      "0": [
      {
        "name": "Л Сист обробл екон інформ",
        "time": "3",
        "teacher": "проф. Сендзюк М.А",
        "cab": "421"
      },
      {
        "name": "П Сист обробл екон інформ",
        "time": "4",
        "teacher": "проф. Сендзюк М.А",
        "cab": "424"
      }
      ],
      "1": [
      {
        "name": "П Сист штучного інтелекту",
        "time": "2",
        "teacher": "проф. Іванченко Г.Ф",
        "cab": "422"
      },
      {
        "name": "Л Створення власного ІТ-бізнесу В",
        "time": "3",
        "teacher": "проф. Лазарєва С.Ф",
        "cab": "416"
      }
      ],
      "2": [
      {
        "name": "ВЫХОДНОЙ",
        "time": "",
        "teacher": "",
        "cab": ""
      }
      ],
      "3": [
      {
        "name": "ВЫХОДНОЙ",
        "time": "",
        "teacher": "",
        "cab": ""
      }
      ],
      "4": [
      {
        "name": "П Статистика В",
        "time": "3",
        "teacher": "ст.в. Столєтова І.Г",
        "cab": "406"
      },
      {
        "name": "П Створення власного ІТ-бізнесу В",
        "time": "4",
        "teacher": "ас. Габрієлян Д.Г",
        "cab": "420"
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
let Nav = React.createClass({
 getDay: function(e) {
  this.props.changeDay(e.target.id);
  this.props.changeStateTimeList(false);
},
getTimeList: function(e) {
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
    for (let keys in dataFirstWeek) {
      arrFirstWeek.push(
        <div key={keys} >
        <div className="col-xs-12 item">
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
        <div className="col-xs-12 item">
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
        <div className="col-xs-6 side"><h5>1 Week</h5></div>
        <div className="col-xs-6 side">
        <h5>{this.props.weekDayProp[this.props.day]}</h5>
        </div>
        </div>
        {arrFirstWeek}
        </div>
        <div>
        <div className="col-xs-12 item item-head">
        <div className="col-xs-6 side"><h5>2 Week</h5></div>
        <div className="col-xs-6 side">
        <h5>{this.props.weekDayProp[this.props.day]}</h5>
        </div>
        </div>
        {arrSecondWeek}
        </div>
        </div>
        </div>
        </div>
        );
    }
    else {
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
    $('.sliderItems').slick({
      arrows: false,
      slidesToShow: 1
    });
    $('.loader').fadeOut();
    $('.loader_inner').delay(1000).fadeOut('slow');
    $('body').delay(1000).css({'overflow':'visible'});
    let currentDay = new Date().getDay()-1;
    $('#'+currentDay).parent().addClass('active');
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
