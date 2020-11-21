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
                            hint="This field uses counter prop"
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
                            hint="This field uses counter prop"
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
                                    <v-btn
                                        v-if="quizQns.length > 1"
                                        @click="removeQn(quizQns.indexOf(qn))"
                                        >Remove Question</v-btn
                                    >
                                </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn color="error" class="mr-4" @click="addNewQn">
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
            rules: [v => v.length <= 125 || "Max 125 characters"],
            fieldSelector: [
                "Text",
                "TextArea",
                "Radio",
                "Selector",
                "Checkbox"
            ],
            selected: "",
            quizQns: [
                {
                    id: 0,
                    title: "Question description...",
                    fieldType: ""
                }
            ]
        }
    },
    methods: {
        addNewQn() {
            return this.quizQns.push({
                id: this.quizQns[this.quizQns.length - 1].id + 1,
                title: "Question description...",
                fieldType: ""
            })
        },
        removeQn(id) {
            return this.quizQns.splice(id, 1)
        }
    }
}
</script>
