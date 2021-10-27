import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
const TaskCheckBox = (props) => {
    const [isSelected, setSelection] = useState(false);

    const through_task = () => {
        if (isSelected) {
            //console.log("checked " + props.id)
            styles.label = {
                alignSelf: "center",
                textDecorationLine: "line-through"
            }
        } else {
            //console.log("unchecked " + props.id)
            styles.label = {
                alignSelf: "center",
                textDecorationLine: "none"
            }
        }
    }

    return (
        <View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onPress={through_task()}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>{props.description}</Text>
            </View>
        </View>
    );
};

var styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        marginTop: 10,
    }
});

export default TaskCheckBox;