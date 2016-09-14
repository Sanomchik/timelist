"use strict";

var jsonData = [{
  "timing": {
    "first_week": {
      "0": [{
        "name": "Лб1 Створення власного ІТ-бізнесу В",
        "time": "2",
        "teacher": "ас. Габрієлян Д.Г",
        "cab": "кц2"
      }, {
        "name": "Сист обробл екон інформ",
        "time": "3",
        "teacher": "проф. Сендзюк М.А",
        "cab": "420"
      }],
      "1": [{
        "name": "Лб1 Технології комп проектування",
        "time": "1",
        "teacher": "ас. Тищенко О.В",
        "cab": "кц4"
      }, {
        "name": "П Технології комп проектування",
        "time": "2",
        "teacher": "ас. Тищенко О.В",
        "cab": "422"
      }, {
        "name": "Л Сист штучного інтелекту",
        "time": "3",
        "teacher": "проф. Іванченко Г.Ф",
        "cab": "416"
      }],
      "2": [{
        "name": "Л Статистика В",
        "time": "2",
        "teacher": "ст.в. Столєтова І.Г",
        "cab": "420"
      }, {
        "name": "Лб1 Сист штучного інтелекту",
        "time": "3",
        "teacher": "проф. Іванченко Г.Ф",
        "cab": "кц3"
      }, {
        "name": "Л Технології комп проектування",
        "time": "4",
        "teacher": "доц. Денiсова О.О",
        "cab": "423"
      }],
      "3": [{
        "name": "ВЫХОДНОЙ",
        "time": "",
        "teacher": "",
        "cab": ""
      }],
      "4": [{
        "name": "П Статистика В",
        "time": "3",
        "teacher": "ст.в. Столєтова І.Г",
        "cab": "406"
      }, {
        "name": "Лб1 Сист обробл екон інформ",
        "time": "4",
        "teacher": "ас. Науменко І.В",
        "cab": "кц1"
      }]
    },
    "second_week": {
      "0": [{
        "name": "Л Сист обробл екон інформ",
        "time": "3",
        "teacher": "проф. Сендзюк М.А",
        "cab": "421"
      }, {
        "name": "П Сист обробл екон інформ",
        "time": "4",
        "teacher": "проф. Сендзюк М.А",
        "cab": "424"
      }],
      "1": [{
        "name": "П Сист штучного інтелекту",
        "time": "2",
        "teacher": "проф. Іванченко Г.Ф",
        "cab": "422"
      }, {
        "name": "Л Створення власного ІТ-бізнесу В",
        "time": "3",
        "teacher": "проф. Лазарєва С.Ф",
        "cab": "416"
      }],
      "2": [{
        "name": "ВЫХОДНОЙ",
        "time": "",
        "teacher": "",
        "cab": ""
      }],
      "3": [{
        "name": "ВЫХОДНОЙ",
        "time": "",
        "teacher": "",
        "cab": ""
      }],
      "4": [{
        "name": "П Статистика В",
        "time": "3",
        "teacher": "ст.в. Столєтова І.Г",
        "cab": "406"
      }, {
        "name": "П Створення власного ІТ-бізнесу В",
        "time": "4",
        "teacher": "ас. Габрієлян Д.Г",
        "cab": "420"
      }]
    },

    "time_list": [{
      "name": "1",
      "time": "8.30 - 9.50"
    }, {
      "name": "2",
      "time": "10.15-11.35"
    }, {
      "name": "3",
      "time": " 12.15-13.40"
    }, {
      "name": "4",
      "time": "14.00-15.20"
    }, {
      "name": "5",
      "time": "15.45-17.05"
    }, {
      "name": "6",
      "time": "17.30-18.30"
    }, {
      "name": "7",
      "time": "18.40-19.40"
    }]

  }
}];
var Nav = React.createClass({
  displayName: "Nav",

  getDay: function getDay(e) {
    this.props.changeDay(e.target.id);
    this.props.changeStateTimeList(false);
  },
  getTimeList: function getTimeList(e) {
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
    for (var keys in dataFirstWeek) {
      arrFirstWeek.push(React.createElement(
        "div",
        { key: keys },
        React.createElement(
          "div",
          { className: "col-xs-12 item" },
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
          { className: "col-xs-12 item" },
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
                    "1 Week"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-6 side" },
                  React.createElement(
                    "h5",
                    null,
                    this.props.weekDayProp[this.props.day]
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
                    "2 Week"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-6 side" },
                  React.createElement(
                    "h5",
                    null,
                    this.props.weekDayProp[this.props.day]
                  )
                )
              ),
              arrSecondWeek
            )
          )
        )
      );
    } else {
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
    $('.sliderItems').slick({
      arrows: false,
      slidesToShow: 1
    });
    $('.loader').fadeOut();
    $('.loader_inner').delay(1000).fadeOut('slow');
    $('body').delay(1000).css({ 'overflow': 'visible' });
    var currentDay = new Date().getDay() - 1;
    $('#' + currentDay).parent().addClass('active');
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