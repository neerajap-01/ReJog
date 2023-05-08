import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from "../../../../utils";
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
    const { employer_logo, job_title, job_employment_type } = job
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleNavigate(job)}
        >
            <TouchableOpacity
                style={styles.logoContainer}
            >
                <Image
                    source={{
                        uri: checkImageURL(employer_logo)
                            ? employer_logo
                            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
                    }}
                    resizeMode='contain'
                    style={styles.logoImage}
                />

            </TouchableOpacity>
            <View
                style={styles.textContainer}
            >
                <Text
                    style={styles.jobName}
                    numberOfLines={1}
                >
                    {job_title}
                </Text>
                <Text
                    style={styles.jobType}
                >
                    {job_employment_type}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobCard