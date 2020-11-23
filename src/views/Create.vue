<template>
    <div>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-text-field
                            v-model="title"
                            :rules="rules"
                            counter="25"
                            hint="Give a title to your quiz"
                            label="Quiz Title"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-textarea
                            v-model="description"
                            :rules="rules"
                            counter="25"
                            hint="Provide a description to your quiz"
                            label="Description"
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
            <v-row justify="center">
                <v-expansion-panels inset>
                    <v-expansion-panel v-for="qn in quizQns" :key="qn.id">
                        <v-expansion-panel-header>
                            {{ quizQns.indexOf(qn) + 1 }} {{ qn.title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-select
                                v-model="qn.fieldType"
                                :items="fieldSelector"
                                label="Please select the field type"
                                filled
                            ></v-select>
                            <p>Selected Field is {{ qn.fieldType }}</p>
                            <v-card
                                v-if="qn.fieldType != ''"
                                elevation="2"
                                outlined
                            >
                                <v-card-text>
                                    <v-text-field
                                        v-model="qn.title"
                                        :rules="rules"
                                        counter="125"
                                        hint="Insert your question here"
                                        label="Question Description"
                                    ></v-text-field>
                                    <v-text-field
                                        v-if="qn.fieldType === 'Text'"
                                        label="Your answer here..."
                                        hint="Insert the right answer here"
                                    ></v-text-field>
                                    <v-textarea
                                        v-else-if="qn.fieldType === 'TextArea'"
                                        filled
                                        label="Your answer here..."
                                        auto-grow
                                    ></v-textarea>
                                    <v-container
                                        v-else-if="qn.fieldType === 'Radio'"
                                    >
                                        <v-row>
                                            <v-col
                                                v-for="opt in qn.radioAnswer"
                                                :key="opt.id"
                                                cols="12"
                                                sm="6"
                                                md="6"
                                            >
                                                <v-checkbox
                                                    v-model="opt.isRight"
                                                    label="Right Answer"
                                                ></v-checkbox>
                                                <v-text-field
                                                    v-model="opt.answer"
                                                    :label="
                                                        `Choice ${opt.id.toString()}`
                                                    "
                                                    placeholder="Answer here..."
                                                    outlined
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-container
                                        v-else-if="qn.fieldType === 'Selector'"
                                    >
                                        <v-list-item
                                            v-for="opt in qn.selectAnswer
                                                .options"
                                            :key="opt.options"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>{{
                                                    opt
                                                }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-text-field
                                            :rules="rules"
                                            counter="25"
                                            label="Add your option here..."
                                            v-model="
                                                qn.selectAnswer
                                                    .tempSelectOptions
                                            "
                                        ></v-text-field>
                                        <v-btn
                                            color="success"
                                            class="mr-4"
                                            @click="
                                                submitAndClearSelectorInput(
                                                    quizQns.indexOf(qn)
                                                )
                                            "
                                        >
                                            Add Option
                                        </v-btn>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                            <v-container>
                                <v-btn
                                    v-if="quizQns.length > 1"
                                    @click="removeQn(quizQns.indexOf(qn))"
                                    >Remove Question</v-btn
                                >
                            </v-container>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn color="success" class="mr-4" @click="addNewQn">
                        Add Question
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            description: "",
            rules: [v => v.length > 0 || "Cannot be empty"],
            fieldSelector: [
                "Text",
                "TextArea",
                "Radio",
                "Selector",
                "Checkbox"
            ],
            quizQns: [
                {
                    id: 0,
                    title: "Question description...",
                    fieldType: "",
                    marks: [],
                    textAnswer: "",
                    textAreaAnswer: "",
                    radioAnswer: [
                        {
                            id: 1,
                            answer: "",
                            type: "",
                            isRight: false
                        },
                        {
                            id: 2,
                            answer: "",
                            type: "",
                            isRight: false
                        },
                        {
                            id: 3,
                            answer: "",
                            type: "",
                            isRight: false
                        },
                        {
                            id: 4,
                            answer: "",
                            type: "",
                            isRight: false
                        }
                    ],
                    selectAnswer: {
                        tempSelectOptions: "",
                        options: [],
                        answer: []
                    }
                }
            ]
        }
    },
    methods: {
        addNewQn() {
            return this.quizQns.push({
                id: this.quizQns[this.quizQns.length - 1].id + 1,
                title: "Question description...",
                fieldType: "",
                marks: [],
                textAnswer: "",
                textAreaAnswer: "",
                radioAnswer: [
                    {
                        id: 1,
                        answer: "",
                        type: "",
                        isRight: false
                    },
                    {
                        id: 2,
                        answer: "",
                        type: "",
                        isRight: false
                    },
                    {
                        id: 3,
                        answer: "",
                        type: "",
                        isRight: false
                    },
                    {
                        id: 4,
                        answer: "",
                        type: "",
                        isRight: false
                    }
                ],
                selectAnswer: {
                    tempSelectOptions: "",
                    options: [],
                    answer: []
                }
            })
        },
        removeQn(id) {
            return this.quizQns.splice(id, 1)
        },
        addSelectOption(idx) {
            return this.quizQns[idx].selectAnswer.options.push(
                this.quizQns[idx].selectAnswer.tempSelectOptions
            )
        },
        clearSelectOption(idx) {
            return (this.quizQns[idx].selectAnswer.tempSelectOptions = "")
        },
        submitAndClearSelectorInput(idx) {
            this.addSelectOption(idx)
            this.clearSelectOption(idx)
        }
    }
}
</script>
