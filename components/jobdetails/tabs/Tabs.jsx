import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from "../../../constants";
import styles from './tabs.style'

const TabButton = ({ tabName, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
        style={styles.btn(tabName, activeTab)}
        onPress={onHandleSearchType}
    >
        <Text
            style={styles.btnText(tabName, activeTab)}
        >
            {tabName}
        </Text>
    </TouchableOpacity>
)
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small/2 }}
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
              tabName={item}
              activeTab={activeTab}
              onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  )
}

export default Tabs