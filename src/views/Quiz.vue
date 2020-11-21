<template>
    <div>
        <v-container>
            <v-progress-linear :value="progressMarker"></v-progress-linear>
        </v-container>
        <v-container>
            <v-row>
                <v-col style="text-align: left">
                    <v-btn
                        v-if="currentId1 > 1"
                        color="success"
                        class="mr-4"
                        @click="prevQnSet"
                    >
                        Previous
                    </v-btn>
                </v-col>
                <v-col style="text-align: right">
                    <v-btn
                        v-if="currentId2 < qns.length"
                        color="error"
                        class="mr-4"
                        @click="nextQnSet"
                    >
                        Next
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
                <div v-for="q in qns" :key="q.id">
                    <div v-if="q.id == currentId1 || q.id == currentId2">
                        <h1>
                            <label>{{ q.title }}</label>
                        </h1>

                        <p>{{ q.description }}</p>
                        <div v-if="q.inputType === 'TextArea'">
                            <FormTextArea />
                        </div>

                        <div v-else-if="q.inputType === 'Text'">
                            <v-text-field label="Regular"></v-text-field>
                        </div>

                        <div v-else-if="q.inputType === 'Radio'">
                            <v-radio-group>
                                <div v-for="opt in q.options" :key="opt.option">
                                    <v-radio :value="opt.answer">
                                        <template v-slot:label>
                                            <div>{{ opt.label }}</div>
                                        </template>
                                    </v-radio>
                                </div>
                            </v-radio-group>
                        </div>
                    </div>
                </div>
            </v-form>
        </v-container>
        <v-container>
            <v-row>
                <v-col style="text-align: left">
                    <v-btn
                        v-if="currentId1 > 1"
                        color="success"
                        class="mr-4"
                        @click="prevQnSet"
                    >
                        Previous
                    </v-btn>
                </v-col>
                <v-col style="text-align: right">
                    <v-btn
                        v-if="currentId2 < qns.length"
                        color="error"
                        class="mr-4"
                        @click="nextQnSet"
                    >
                        Next
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import FormTextArea from "@/components/FormTextArea.vue"
export default {
    name: "Quiz",
    components: {
        FormTextArea
    },
    data() {
        return {
            counter: 0,
            currentId1: 1,
            currentId2: 2,
            qns: [
                {
                    id: 1,
                    title: "This is question 1",
                    description: "This is the description 1",
                    inputType: "TextArea",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: false
                        },
                        {
                            label: "This is option 3",
                            option: 3,
                            answer: true
                        },
                        {
                            label: "This is option 4",
                            option: 4,
                            answer: false
                        }
                    ]
                },
                {
                    id: 2,
                    title: "This is question 2",
                    description: "This is the description 2",
                    inputType: "Radio",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                },
                {
                    id: 3,
                    title: "This is question 3",
                    description: "This is the description 3",
                    inputType: "Text",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                },
                {
                    id: 4,
                    title: "This is question 4",
                    description: "This is the description 4",
                    inputType: "TextArea",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                },
                {
                    id: 5,
                    title: "This is question 5",
                    description: "This is the description 5",
                    inputType: "Radio",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                },
                {
                    id: 6,
                    title: "This is question 6",
                    description: "This is the description 6",
                    inputType: "Radio",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                },
                {
                    id: 7,
                    title: "This is question 7",
                    description: "This is the description 7",
                    inputType: "Radio",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                },
                {
                    id: 8,
                    title: "This is question 8",
                    description: "This is the description 8",
                    inputType: "Radio",
                    options: [
                        {
                            label: "This is option 1",
                            option: 1,
                            answer: false
                        },
                        {
                            label: "This is option 2",
                            option: 2,
                            answer: true
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        progressMarker() {
            return (this.currentId2 / this.qns.length) * 100
        }
    },
    methods: {
        nextQnSet() {
            this.currentId1 += 2
            this.currentId2 += 2
        },
        prevQnSet() {
            this.currentId1 -= 2
            this.currentId2 -= 2
        }
    }
}
</script>
