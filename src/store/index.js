import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    documents_list_categories: [
      {
        id: 100,
        title: "Обязательные для всех",
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        list: [
          {
            id: 1000,
            title: "Паспорт",
            required: true,
            forAll: true,
          },
          {
            id: 1001,
            title: "ИНН",
            required: true,
            forAll: true,
          },
          {
            id: 1002,
            title: "Трудовой договор",
            required: true,
            forAll: true,
          },
        ],
      },
      {
        id: 101,
        title: "Обязательные для трудоустройства",
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        list: [
          {
            id: 1003,
            title: "Паспорт",
            required: true,
            forAll: true,
          },
          {
            id: 1004,
            title: "ИНН",
            required: true,
            forAll: true,
          },
          {
            id: 1005,
            title: "Гражданство",
            required: true,
            forAll: true,
          },
        ],
      },
      {
        id: 102,
        title: "Специальные",
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        list: [
          {
            id: 1006,
            title: "Паспорт",
            required: true,
            forAll: true,
          },
          {
            id: 1007,
            title: "ПИНФЛ",
            required: true,
            forAll: true,
          },
        ],
      },
    ],
    documents_list: [
      {
        id: 1100,
        title: "Тестовое задание кандидата",
        description:
          "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
      },
      {
        id: 1101,
        title: "Трудовой договор",
      },
      {
        id: 1102,
        title: "Мед. книжка",
      },
    ],
  },
  getters: {
    documentsListCategories(state) {
      return state.documents_list_categories;
    },
    documentsList(state) {
      return state.documents_list;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
