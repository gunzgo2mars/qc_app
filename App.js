import React from 'react';
import { StyleSheet, Text, View , StatusBar , Dimensions, ScrollView , TextInput } from 'react-native';
import { BottomNavigation , RadioButton , Button } from 'react-native-material-ui'
import axios from 'axios'

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      _activeCur : 'input',
      _no1 : '',
      _no2 : '',
      _no3 : '',
      _no4 : '',
      _no5 : '',
      _isNoCorrect : false,
      _centerLine : false,
      _ptBar : false,
      _earBar : false,
      _dirt : false,
      _bracket : false,
      _key_clean : false,
      _key_amount : false,
      _hole : false,
      
        _crossBeam_bracket : false,
        _crossBeam_ptBar : false,
        _crossBeam_bearing : false,
        _crossBeam_hexNuc : false
      
    }

  }

  async _senderData() {

    fetch('http://192.168.0.161:1999/api/v1/addForm' , {
      method : "POST",
      headers : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        _no1 : this.state._no1,
        _no2 : this.state._no2,
        _no3 : this.state._no3,
        _no4 : this.state._no4,
        _no5 : this.state._no5,
        _isNoCorrect : this.state._isNoCorrect,
        _centerLine : this.state._centerLine,
        _ptBar : this.state._ptBar,
        _earBar : this.state._earBar,
        _dirt : this.state._dirt,
        _bracket : this.state._bracket,
        _key_clean : this.state._key_clean,
        _key_amount : this.state._key_amount,
        _hole : this.state._hole,
        _crossBeam_bracket : this.state._crossBeam_bracket,
        _crossBeam_ptBar : this.state._crossBeam_ptBar,
        _crossBeam_bearing : this.state._crossBeam_bearing,
        _crossBeam_hexNuc : this.state._crossBeam_hexNuc
      })
    }).then(response => response.json())
    .then(responseJson => console.log(responseJson.result))

  }


  _renderContent(_content) {

    switch(_content) {

      case "input" : 
        return (

          <View style={[styles.container]}>

            <View style={[styles.Header]}>
              <Text style={{ fontSize : 24}}>
                แบบตรวจสอบชิ้นงาน
              </Text>
            </View>

            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>กรอกรหัส</Text>
                </View>
                <View style={[styles.FormDataInput]}>
                  <TextInput maxLength={2} onChange={(text) => {this.setState({ _no1 : text.nativeEvent.text })}} style={{ width : 30 , height : 40 , borderColor : 'black' , borderWidth : 1 }} />
                  <TextInput maxLength={2} onChange={(text) => {this.setState({ _no2 : text.nativeEvent.text })}} style={{ width : 30 , height : 40 , borderColor : 'black' , borderWidth : 1 }} />
                  <TextInput maxLength={2} onChange={(text) => {this.setState({ _no3 : text.nativeEvent.text })}} style={{ width : 30 , height : 40 , borderColor : 'black' , borderWidth : 1 }} />
                  <TextInput maxLength={2} onChange={(text) => {this.setState({ _no4 : text.nativeEvent.text })}} style={{ width : 30 , height : 40 , borderColor : 'black' , borderWidth : 1 }} />
                  <TextInput maxLength={2} onChange={(text) => {this.setState({ _no5 : text.nativeEvent.text })}} style={{ width : 30 , height : 40 , borderColor : 'black' , borderWidth : 1 }} />
                </View>
              </View>
            </View>

            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>รหัสชิ้นงาน</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ถูกต้อง"
                      checked={this.state._isNoCorrect}
                      value="Value"
                      onCheck={checked => this.setState({ _isNoCorrect : true})}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ไม่ถูกต้อง"
                      checked={!this.state._isNoCorrect}
                      value="Value"
                      onCheck={checked => this.setState({ _isNoCorrect : false })}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>ระบุเส้น Center Line</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="มี"
                      checked={this.state._centerLine}
                      value="Value"
                      onCheck={checked => this.setState({ _centerLine : true })}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ไม่มี"
                      checked={!this.state._centerLine}
                      value="Value"
                      onCheck={checked => this.setState({ _centerLine : false })}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>รูร้อย PT.Bar</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ใส่ได้"
                      checked={this.state._ptBar}
                      value="Value"
                      onCheck={checked => this.setState({ _ptBar : true })}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ใส่ไม่ได้"
                      checked={!this.state._ptBar}
                      value="Value"
                      onCheck={checked => this.setState({ _ptBar : false })}
                  />
                </View>
              </View>
            </View>


            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>รูติดตั้งหูช้างทางเดิน</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="มี"
                      checked={this.state._earBar}
                      value="Value"
                      onCheck={checked => this.setState({ _earBar : true })}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ไม่มี"
                      checked={!this.state._earBar}
                      value="Value"
                      onCheck={checked => this.setState({ _earBar : false })}
                  />
                </View>
              </View>
            </View>


            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>เศษดินใต้ชิ้นงาน(ต้องไม่มี)</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="มี"
                      checked={this.state._bracket}
                      value="Value"
                      onCheck={checked => this.setState({ _bracket : true })}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ไม่มี"
                      checked={!this.state._bracket}
                      value="Value"
                      onCheck={checked => this.setState({ _bracket : false })}
                  />
                </View>
              </View>
            </View>


            <View style={[styles.SectionMg]}>
              <View style={[styles.FormInSectionMg]}>
                <View style={[styles.Form]}>
                  <Text>Key รอยต่อ</Text>
                </View>
                <View style={[styles.FormBig]}>
                  <View style={[styles.ColLg]}>
                    <Text>ความเรียบร้อยของ Key ไม่มีเศษปูน</Text>
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ครบ"
                      checked={this.state._key_clean}
                      value="Value"
                      onCheck={checked => this.setState({ _key_clean : true  })}
                    />
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ไม่ครบ"
                      checked={!this.state._key_clean}
                      value="Value"
                      onCheck={checked => this.setState({ _key_clean : false  })}
                    />
                  </View>
                </View>
                <View style={[styles.FormBig]}>
                  <View style={[styles.ColLg]}>
                    <Text>ความเรียบร้อยต่อชิ้นงาน</Text>
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ครบ"
                      checked={this.state._key_amount}
                      value="Value"
                      onCheck={checked => this.setState({ _key_amount : true  })}
                    />
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ไม่ครบ"
                      checked={!this.state._key_amount}
                      value="Value"
                      onCheck={checked => this.setState({ _key_amount : false  })}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>ช่องติดตั้ง Bracket</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ขนาด/ตำแหน่งถูกต้อง"
                      checked={this.state._dirt}
                      value="Value"
                      onCheck={checked => this.setState({ _dirt : true })}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ขนาด/ตำแหน่งต้องแก้ไข"
                      checked={!this.state._dirt}
                      value="Value"
                      onCheck={checked => this.setState({ _dirt : false })}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.Section]}>
              <View style={[styles.FormInSection]}>
                <View style={[styles.Form]}>
                  <Text>รูติดตั้งกระเช้า</Text>
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ขนาด/ตำแหน่งถูกต้อง"
                      checked={this.state._hole}
                      value="Value"
                      onCheck={checked => this.setState({ _hole : true })}
                  />
                </View>
                <View style={[styles.Form]}>
                  <RadioButton
                      label="ขนาด/ตำแหน่งต้องแก้ไข"
                      checked={!this.state._hole}
                      value="Value"
                      onCheck={checked => this.setState({ _hole : false })}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.SectionLg]}>
              <View style={[styles.FormInSectionLg]}>
                <View style={[styles.Form]}>
                  <Text>ติดตั้งอุปกรณ์ยึงรั้งชั่วคราวบน CROSS BEAM*</Text>
                </View>
                <View style={[styles.FormBig]}>
                  <View style={[styles.ColLg]}>
                    <Text>BRACKET</Text>
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ครบ"
                      checked={this.state._crossBeam_bracket}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_bracket : true  })}
                    />
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ไม่ครบ"
                      checked={!this.state._crossBeam_bracket}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_bracket : false })}
                    />
                  </View>
                </View>
                <View style={[styles.FormBig]}>
                  <View style={[styles.ColLg]}>
                    <Text>PT BAR 25/26.5</Text>
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ครบ"
                      checked={this.state._crossBeam_ptBar}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_ptBar : true  })}
                    />
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ไม่ครบ"
                      checked={!this.state._crossBeam_ptBar}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_ptBar : false })}
                    />
                  </View>

                </View>
                <View style={[styles.FormBig]}>
                  <View style={[styles.ColLg]}>
                    <Text>BEARING PLATE 25/26.5</Text>
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ครบ"
                      checked={this.state._crossBeam_bearing}
                      value="Value"
                      onCheck={checked => this.setState({_crossBeam_bearing : true })}
                    />
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ไม่ครบ"
                      checked={!this.state._crossBeam_bearing}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_bearing : false })}
                    />
                  </View>
                  
                </View>
                <View style={[styles.FormBig]}>
                  <View style={[styles.ColLg]}>
                    <Text>HEX NUT 25/26.5</Text>
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ครบ"
                      checked={this.state._crossBeam_hexNuc}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_hexNuc : true  })}
                    />
                  </View>
                  <View style={[styles.Col]}>
                    <RadioButton
                      label="ไม่ครบ"
                      checked={!this.state._crossBeam_hexNuc}
                      value="Value"
                      onCheck={checked => this.setState({ _crossBeam_hexNuc : false  })}
                    />
                  </View>
                  
                </View>
              </View>
            </View>
            
            <View style={[styles.Section]}>
              <Button raised icon={'check'} primary text="ส่งแบบฟอมร์" onPress={() => {
                this._senderData()
              }} />
            </View>

          </View>

        )

      case "list" :
          return (
            <View style={[styles.container]}>
              <View style={[styles.Header]}>
                <Text style={{ fontSize : 24}}>
                  รายการ
                </Text>
              </View>
            </View>
          )

      default : return null

    }

  } 
  
  render() {
    return (
      <View style={styles.block}>
        <StatusBar barStyle={'dark-content'} />

        <View style={[styles.content]}>
          <ScrollView>
            {this._renderContent(this.state._activeCur)}
          </ScrollView>
        </View>
        <View style={[styles.tabbar]}>
          <BottomNavigation active={this.state._activeCur} hidden={true} >
            <BottomNavigation.Action
                key="input"
                icon="input"
                label="กรอกข้อมูล"
                onPress={() => this.setState({ _activeCur: 'input' })}
            />
            <BottomNavigation.Action
                key="list"
                icon="list"
                label="รายการ"
                onPress={() => this.setState({ _activeCur: 'list' })}
            />
          </BottomNavigation>
        </View>
      </View>
    );
  }
}

const { height , width } = Dimensions.get('screen')

const styles = StyleSheet.create({

  Header : {

    height : height * 0.07,
    width : width,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20

  },

  Section : {

    height : height * 0.3,
    width : width,
    backgroundColor: '#dfe6e9',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10

  },

  SectionMg : {
    height : height * 0.4,
    width : width,
    backgroundColor: '#dfe6e9',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10
  },

  SectionLg : {
    height : height * 0.6,
    width : width,
    backgroundColor: '#dfe6e9',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10
  },

  FormInSection : {

    height : height * 0.22,
    width : width * 0.90,
    backgroundColor : '#fff',
    borderRadius : 10,
    display : 'flex'

  },

  FormInSectionLg : {

    height : height * 0.55,
    width : width * 0.90,
    backgroundColor : '#fff',
    borderRadius : 10,
    display : 'flex'

  },

  FormInSectionMg : {

    height : height * 0.33,
    width : width * 0.90,
    backgroundColor : '#fff',
    borderRadius : 10,
    display : 'flex'

  },

  Form : {

    flex : 1,
    justifyContent : 'center',
    paddingLeft : 10

  },

  FormBig : {
    flex : 1,
    justifyContent : 'center',
    paddingLeft : 10,
    flexDirection : 'row'
  },

  ColLg : {
    flex : 2,
    justifyContent : 'center',
    alignItems : 'center'

  },

  Col : {

    flex : 1,

  },

  FormDataInput : {

    flex : 1,
    justifyContent : 'center',
    flexDirection : 'row',
    paddingLeft : 10

  },

  FormInput : {

    flex : 1,
    justifyContent : 'center',
    paddingLeft : 10

  },

  block : {

    flex: 1,
    backgroundColor: '#dfe6e9',
    
  },


  container: {
    flex: 1,
    backgroundColor: '#dfe6e9',
    alignItems : 'center',
    justifyContent : 'center',
  },

  content : {

    flex : 9,

  },
  tabbar : {

    flex : 1,

  }


});


export default App
