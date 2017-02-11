"use strict";

var jsonData = [
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
        "name": "Л Технології хмарних обчислень",
        "time": "4",
        "teacher": "Камінський О.Є",
        "cab": "424"
      },
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
        "name": "П Моделювання систем",
        "time": "7",
        "teacher": "Скіцько В.І.",
        "cab": "424"
      }
      ],
      "3": [
      {
        "name": "Л Управл ІТ-проектами",
        "time": "5",
        "teacher": "Лазарєва С.Ф.",
        "cab": "424"
      },
      {
        "name": "П Управл ІТ-проектами",
        "time": "6",
        "teacher": "Габрієлян Д.Г.",
        "cab": "406"
      }
      ],
      "4": [
      {
        "name": "Л Сист підтрим прийнят рішень",
        "time": "4",
        "teacher": "Помазун О.М.",
        "cab": "421"
      },
      {
        "name": "Лб Моделювання систем",
        "time": "5",
        "teacher": "Скіцько В.І.",
        "cab": "кц1"
      }
      ]
    },
    "second_week": {
      "0": [
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
        "name": "Лб Технології хмарних обчислень",
        "time": "5",
        "teacher": "Камінський О.Є",
        "cab": "кц"
      },
      {
        "name": "Лб Управл ІТ-проектами",
        "time": "6",
        "teacher": "Габрієлян Д.Г.",
        "cab": "кц"
      },
      {
        "name": "Лб Моделювання систем",
        "time": "7",
        "teacher": "Мірошниченко І.В.",
        "cab": "кц"
      }
      ],
      "2": [
      {
        "name": "Л Сист підтрим прийнят рішень",
        "time": "3",
        "teacher": "Помазун О.М.",
        "cab": "424"
      },
      {
        "name": "Л Управл ІТ-проектами",
        "time": "4",
        "teacher": "Лазарєва С.Ф.",
        "cab": "424"
      },
      {
        "name": "П Моделювання систем",
        "time": "5",
        "teacher": "Скіцько В.І.",
        "cab": "424"
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
var periodTime = [{ start: '08.30', end: '09.50' }, { start: '10.15', end: '11.35' }, { start: '12.15', end: '13.40' }, { start: '14.00', end: '15.20' }, { start: '15.45', end: '17.05' }, { start: '17.30', end: '18.30' }, { start: '18.40', end: '19.40' }];
var Nav = React.createClass({
  displayName: "Nav",

  getDay: function getDay(e) {
    e.preventDefault();
    this.props.changeDay(e.target.id);
    this.props.changeStateTimeList(false);
  },
  getTimeList: function getTimeList(e) {
    e.preventDefault();
    this.props.changeStateTimeList(true);
  },
  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-default" },
      React.createElement(
        "div",
        { className: "container nav-container" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          )
        ),
        React.createElement(
          "div",
          { id: "navbar", className: "navbar-collapse collapse" },
          React.createElement(
            "ul",
            { className: "nav navbar-nav", id: "startlist" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.getDay, id: "0" },
                "Monday"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.getDay, id: "1" },
                "Tuesday"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.getDay, id: "2" },
                "Wednesday"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.getDay, id: "3" },
                "Thursday"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.getDay, id: "4" },
                "Friday"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.getTimeList, id: "5" },
                "Time list"
              )
            )
          )
        )
      )
    );
  }
});
var List = React.createClass({
  displayName: "List",

  render: function render() {
    var dataFirstWeek = jsonData[0].timing.first_week[this.props.day];
    var dataSecondWeek = jsonData[0].timing.second_week[this.props.day];
    var arrFirstWeek = [];
    var arrSecondWeek = [];
    var currentTime = new Date().toString().substr(16, 5);
    for (var keys in dataFirstWeek) {
      arrFirstWeek.push(React.createElement(
        "div",
        { key: keys },
        React.createElement(
          "div",
          { className: periodTime[dataFirstWeek[keys].time - 1].start < currentTime && currentTime < periodTime[dataFirstWeek[keys].time - 1].end ? "col-xs-12 item current" : currentTime > periodTime[dataFirstWeek[keys].time - 1].end ? "col-xs-12 item past" : "col-xs-12 item" },
          React.createElement(
            "div",
            { className: "col-xs-3 side" },
            React.createElement(
              "h5",
              null,
              dataFirstWeek[keys].time
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-6" },
            React.createElement(
              "h5",
              null,
              dataFirstWeek[keys].name
            ),
            React.createElement(
              "h6",
              null,
              dataFirstWeek[keys].teacher
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-3 side" },
            React.createElement(
              "h5",
              null,
              dataFirstWeek[keys].cab
            )
          )
        )
      ));
    }
    for (var _keys in dataSecondWeek) {
      arrSecondWeek.push(React.createElement(
        "div",
        { key: _keys },
        React.createElement(
          "div",
          { className: periodTime[dataSecondWeek[_keys].time - 1].start < currentTime && currentTime < periodTime[dataSecondWeek[_keys].time - 1].end ? "col-xs-12 item current" : currentTime > periodTime[dataSecondWeek[_keys].time - 1].end ? "col-xs-12 item past" : "col-xs-12 item" },
          React.createElement(
            "div",
            { className: "col-xs-3 side" },
            React.createElement(
              "h5",
              null,
              dataSecondWeek[_keys].time
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-6" },
            React.createElement(
              "h5",
              null,
              dataSecondWeek[_keys].name
            ),
            React.createElement(
              "h6",
              null,
              dataSecondWeek[_keys].teacher
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-3 side" },
            React.createElement(
              "h5",
              null,
              dataSecondWeek[_keys].cab
            )
          )
        )
      ));
    }
    if (this.props.timeListShowNeed == false) {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "slider sliderItems" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "col-xs-12 item item-head" },
                React.createElement(
                  "div",
                  { className: "col-xs-6 side" },
                  React.createElement(
                    "h5",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      "First week"
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-6 side" },
                  React.createElement(
                    "h5",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      this.props.weekDayProp[this.props.day]
                    )
                  )
                )
              ),
              arrFirstWeek
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "col-xs-12 item item-head" },
                React.createElement(
                  "div",
                  { className: "col-xs-6 side" },
                  React.createElement(
                    "h5",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      "Second week"
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-6 side" },
                  React.createElement(
                    "h5",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      this.props.weekDayProp[this.props.day]
                    )
                  )
                )
              ),
              arrSecondWeek
            )
          )
        )
      );
    }
    if (this.props.timeListShowNeed == true) {
      $('.sliderItems').slick('unslick');
      $('.active').removeClass('active');
      $('#5').parent().addClass('active');
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row timing" },
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "1"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                "8.30 - 9.50"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "2"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                "10.15-11.35"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "3"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                " 12.15-13.40"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "4"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                "14.00-15.20"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "5"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                "15.45-17.05"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "6"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                "17.30-18.30"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-12 item " },
            React.createElement(
              "div",
              { className: "col-xs-6 side" },
              React.createElement(
                "h5",
                null,
                "7"
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-6" },
              React.createElement(
                "h5",
                null,
                "18.40-19.40"
              )
            )
          )
        )
      );
    }
  }
});
var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      day: new Date().getDay() - 1,
      timeListShow: false,
      weekDayArr: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    };
  },
  componentDidMount: function componentDidMount() {
    $('.loader').fadeOut();
    $('.loader_inner').delay(1000).fadeOut('slow');
    $('body').delay(1000).css({ 'overflow': 'visible' });
    $('.sliderItems').slick({
      arrows: false,
      slidesToShow: 1
    });
    var currentDay = new Date().getDay() - 1;
    $('#' + currentDay).parent().addClass('active');
  },
  componentDidUpdate: function componentDidUpdate() {
    $('.sliderItems').slick('unslick');
    $('.sliderItems').slick({
      arrows: false,
      slidesToShow: 1
    });
  },
  setDay: function setDay(day) {
    this.setState({
      day: day
    });
    $('.active').removeClass('active');
    $('#' + day).parent().addClass('active');
    if (document.body.clientWidth < 757) {
      $('.btn-navbar').click();
      $('.navbar-toggle').click();
    }
  },
  timeListShow: function timeListShow(v) {
    this.setState({
      timeListShow: v
    });
  },
  render: function render() {
    var currentDay = this.state.day;
    var timeListShowNeedValue = this.state.timeListShow;
    var weekDayList = this.state.weekDayArr;
    return React.createElement(
      "div",
      null,
      React.createElement(Nav, { changeDay: this.setDay, changeStateTimeList: this.timeListShow }),
      React.createElement(List, { day: currentDay, weekDayProp: weekDayList, timeListShowNeed: timeListShowNeedValue })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));