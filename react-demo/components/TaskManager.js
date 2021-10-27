import React, { useState } from "react";
import TaskCheckBox from "./TaskCheckBox"
import { tasks } from "../tasks"
import { Button, StyleSheet, View, Modal, Text, TextInput, Pressable, Alert } from "react-native";

const TaskManager = (props) => {
    const [task_list, setTasks] = useState(tasks);  //task lists
    const [modalCreateVisible, setCreateModalVisible] = useState(false);    //control the modal (create task) visibility
    const [modalEditVisible, setEditModalVisible] = useState(false);    //control the modal (edit task) visibility
    const [input, setInput] = useState(''); //inputs from the user
    const [nid, setNID] = useState(4);  //identifier - control tasks ids
    const [edit_TaskID, setEdit_TaskID] = useState();  //identifier - control tasks ids

    /* Create Task */
    function createTask(description) {
        var newTask = {
            id: nid,    //initial: 4 --> there are 4 tasks already
            description: description,
            isSelected: false
        }
        task_list.push(newTask) //add new task to the task list
        setNID(nid + 1) //increment task id
        setTasks(task_list) //update the state task list
    }
    /* Edit Task */
    function editTask(id, description) {
        var task = task_list.find(task => task.id === id)   //task i want to edit
        var taskIndex = task_list.indexOf(task) //index of the task i want to edit

        task_list[taskIndex].description = description  //update description

        setTasks(task_list) //update the state task list
    }

    return (
        <View >
            {task_list.map(task =>
                <View key={task.id} style={styles.checkboxContainer} >
                    <TaskCheckBox id={task.id} description={task.description} />
                    <View style={styles.btn_row}>
                        <View style={styles.btn_colum}>
                            <Button onPress={() => {
                                setEditModalVisible(true)
                                setEdit_TaskID(task.id)
                            }
                            } title="Edit" />
                        </View>
                        <View style={styles.btn_colum}>
                            <Button onPress={() => setTasks(task_list.filter(item => item.id !== task.id))} title="X" color="red" />
                        </View>
                    </View>
                </View>
            )}

            <View style={styles.centeredView}>

                {/* CREATE MODAL*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalCreateVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setCreateModalVisible(!modalCreateVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.modalText}>New Task</Text>
                            <TextInput
                                placeholder="Description"
                                keyboardType="default"
                                onChangeText={setInput}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    //console.log("enviar dados")
                                    createTask(input)
                                    setCreateModalVisible(!modalCreateVisible)
                                }}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {
                        setCreateModalVisible(true)
                    }}
                >
                    <Text style={styles.textStyle}>Add new task</Text>
                </Pressable>



                {/* EDIT MODAL*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalEditVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setCreateModalVisible(!modalEditVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.modalText}>Edit Task</Text>
                            <TextInput
                                placeholder="Description"
                                keyboardType="default"
                                onChangeText={setInput}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    console.log("enviar dados")
                                    editTask(edit_TaskID, input)
                                    setEditModalVisible(!modalEditVisible)
                                }}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </View >
    );
};

var styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10
    },
    btn_add: {
        top: 50,
    }, btn_colum: {
        flexDirection: "column",
        position: "relative",
        left: 10
    }, btn_row: {
        flexDirection: "row",
        marginLeft: 10,
    }, centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,

    },
    buttonOpen: {
        backgroundColor: "#2196F3",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default TaskManager;