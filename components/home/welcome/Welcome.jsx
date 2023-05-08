import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { useRouter } from "expo-router";
import styles from './welcome.style'
import {COLORS, icons, SIZES} from "../../../constants";

const jobTypes = ['Full Time', 'Part Time',  'Freelance', 'Internship', 'Contractor'];
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter();
     const [activeJobType, setActiveJobType] = useState(jobTypes[0]);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello!! Neeraj</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="What are you looking for?"
                        placeholderTextColor={COLORS.gray2}
                        value={searchTerm}
                        onChangeText={(text) => {
                            setSearchTerm(text)
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={handleClick}
                >
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item)
                                router.push(`/search/${item}`)
                            }}
                        >
                            <Text
                                style={styles.tabText(activeJobType, item)}
                            >{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

export default Welcome