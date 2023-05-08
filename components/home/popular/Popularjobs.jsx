import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator, FlatList,
} from 'react-native'
import { useRouter } from "expo-router";
import styles from './popularjobs.style'
import { COLORS, SIZES } from "../../../constants";
import PopularjobcardStyle from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
const Popularjobs = () => {
    const { data, isLoading, error } = useFetch("search", {
        query: "React developer",
        num_pages: "1",
    });
    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.header}
            >
                <Text
                    style={styles.headerTitle}
                >
                    Popular Jobs
                </Text>
                <TouchableOpacity>
                    <Text
                        style={styles.headerBtn}
                    >
                        Show all
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={styles.cardsContainer}
            >
                {isLoading ? (
                    <ActivityIndicator
                        size='large'
                        color={COLORS.primary}
                    />
                ) : error ? (
                    <Text>
                        Something went wrong
                    </Text>
                ) : (
                    <FlatList
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                        data={data}
                        renderItem={({item}) => (
                            <PopularjobcardStyle
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            />
                        )}
                    />
                )}
            </View>
        </View>
    )
}

export default Popularjobs