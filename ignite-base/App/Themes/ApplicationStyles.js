import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    backgroundImage: {
      resizeMode: 'stretch',
      width: Metrics.screenWidth,
      flex: 1,
      marginTop: Metrics.navBarHeight
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
      borderTopColor: Colors.ricePaper,
      borderTopWidth: 0.5,
      borderBottomColor: Colors.ricePaper,
      borderBottomWidth: 1
    },
    sectionText: {
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontFamily: Fonts.type.bold
    },
    subtitle: {
      color: Colors.snow,
      padding: 5,
      marginBottom: 5,
      marginHorizontal: Metrics.smallMargin
    }
  },
  darkLabel: {
    backgroundColor: Colors.cloud,
    fontFamily: Fonts.bold,
    color: Colors.snow,
    padding: 5
  },
  groupContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: 5,
    marginTop: 5,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
