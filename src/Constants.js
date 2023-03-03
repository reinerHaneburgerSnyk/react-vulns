import  {Component} from 'react';

class Constants extends Component {
  static backendUrlBase = "http://localhost:8080/";
  static backendRESTUrlBase = "http://localhost:8080/rest/";
  // The below URLs are the google cloud instance mentioned in the README. Changing this to the localhost deployment of Javulna
  // static backendUrlBase = "http://35.204.241.43:31337/";
  // static backendRESTUrlBase = "http://35.204.241.43:31337/rest/";
}

export default Constants;
