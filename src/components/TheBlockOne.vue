<template>
  <div class="content">
    <div v-in-viewport.once class="block">
      <div class="block__item">
        <img class="block__item-header" src="@/assets/img/1_page_Katya.png" />
      </div>
      <div class="block__item">
        <p class="block__item-desc">
          <vue-typer
            id="typewriter"
            :repeat="0"
            :type-delay="20"
            @typed-char="onTypedChar"
            text="Перед Новым годом из печати вышла уникальная книга для детей и о детях «Тася». Прежде всего она уникальна возрастом автора - Кати Корочкиной, которая написала ее в 12 лет. Юная писательница создала целый мир, в котором живут герои. Все средства, полученные от ее продажи, Катя решила направить в благотворительный фонд «Линия жизни». Приобретая книгу, вы отдаете частичку своего тепла и доброты детям, которые нуждаются в помощи."
          ></vue-typer>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  components: {
    VueTyper
  },
  data() {
    return {
      countWord: 0
    };
  },
  methods: {
    onTypedChar: function(typedChar, typedCharIndex) {
      if (typedCharIndex == 0) {
        document.getElementById("typewriter").firstChild.innerHTML = "";
      }
      var lessNodes = document.getElementById("typewriter").lastChild
        .childNodes;
      if (typedChar == " " || lessNodes.length == 1) {
        var finalNodes = document.getElementById("typewriter").firstChild;
        var listNodes = finalNodes.childNodes;

        var newNode = document.createElement("span");

        var x = this.countWord;
        var countNodes = listNodes.length;
        while (x < countNodes) {
          if (listNodes[this.countWord].innerHTML != " ")
            newNode.insertAdjacentElement(
              "beforeend",
              listNodes[this.countWord]
            );
          else this.countWord++;

          // TODO: ADD LAST CHAR
          x++;
        }
        newNode.className = "nowrap";
        finalNodes.insertAdjacentElement("beforeend", newNode);

        this.countWord++;
      }
    }
  }
};
</script>