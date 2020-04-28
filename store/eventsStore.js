import {observable, action} from 'mobx';

class EventsStore{
  @observable upcomingEvents = [];
  @observable highlightsEvents = [];
  @observable upcomingEventsCount = 10

  // change events count
  @action changeUpcomingEventsCount(eventsCount) {
    if (eventsCount > 0) {
      this.upcomingEventsCount = eventsCount
      this.upcomingEvents = []
      this.fetchUpcomingEvents()
    }
  }

  // save events
  @action saveToUpcomingEvents(events) {
    if (events) {
      this.upcomingEvents = [...events.Events]
    }
  }
  @action saveToHighlightsEvents(events) {
    if (events) {
      this.highlightsEvents = [...events.Events]
    }
  }

  // fetch events
  @action fetchUpcomingEvents() {
    try {
      fetch(`http://hybrid-clientapi-altenar-dev.biahosted.com/Sportsbook/GetUpcoming?timezoneOffset=-180&langId=1&skinName=default&configId=1&culture=en&countryCode=RU&deviceType=Desktop&numformat=en&sportId=1&showAllEvents=false&count=${this.upcomingEventsCount}`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          this.saveToUpcomingEvents(responseJson.Result.Items[0])
        }
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  @action fetchHighlightsEvents() {
    try {
      fetch('http://hybrid-clientapi-altenar-dev.biahosted.com/Sportsbook/GetHighlights?timezoneOffset=-180&langId=1&skinName=default&configId=1&culture=en&countryCode=RU&deviceType=Desktop&numformat=en&sportId=1&showAllEvents=false&count=10')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          this.saveToHighlightsEvents(responseJson.Result.Items[0])
        }
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.log('Error: ', error)
    }
  }
}
export default new EventsStore();