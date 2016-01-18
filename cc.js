(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(function () {
    this.StopWords = Kotlin.createObject(null, function () {
      var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$(['\u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u0435\u0432\u0440\u043E\u043F\u044B \u0442\u0440\u0435\u0434', '\u0435\u0431\u0430\u043D\u0443\u0442\u044B\u0445 \u043F\u043E\u0441\u0442\u0443\u043F\u043A\u043E\u0432 \u0430\u043D\u043E\u043D\u0430', '\u0442\u044B \u043D\u0435 \u0434\u043E\u0436\u0438\u0432\u0435\u0448\u044C \u0434\u043E \\d+ \u0433\u043E\u0434', '\u043D\u0430\u0431\u043E\u0440\u0430 \u0432\u0435\u0441\u0430 \u0442\u0440\u0435\u0434', '\u0443\u0433\u0430\u0434\u0430\u0439 \u0444\u0438\u043B\u044C\u043C', '\u043A\u0430\u043A \u0431\u0440\u0438\u0442\u044C\u0441\u044F', '\u0440\u043E\u0441\u0442\u043E\u043C \u043D\u0438\u0436\u0435', '\u043D\u0438\u0449\u0435\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0442\u0440\u0435\u0434', '\u0444\u044D\u043D\u0442\u0435\u0437\u0438-\u0442\u0440\u0435\u0434', '\u043F\u043E\u0435\u0437\u0434-\u0442\u0440\u0435\u0434', '\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043B\u044E\u0431\u043E\u0432\u044C', '\u043F\u0440\u043E\u0448\u0443 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0443\u0439\u0442\u0435', '\u043B\u0435\u0432\u044B\u0445 \u043E\u0442\u043C\u0430\u0437\u043E\u043A \u0442\u0440\u0435\u0434', '\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u044C-\u0442\u0440\u0435\u0434', '\u0442\u043D\u0443\u0441 - \u0442\u044F\u043D \u043D\u0435 \u0443\u043C\u0435\u044E\u0442 \u0441\u0440\u0430\u0442\u044C', '\u043C\u044B\u0448\u0430\u0447 \u0442\u0440\u0435\u0434', '\u0442\u0432\u043E\u0435\u0439 \u0442\u044F\u043D\u043A\u0438 \u0442\u0440\u0435\u0434', '\u0433\u0440\u0443\u0441\u0442\u043D\u043E\u0442\u0440\u0435\u0434', '\u0443\u0436\u0438\u043D\u0430 \u0430\u043D\u043E\u043D\u0430', '\u0430\u043D\u0438\u043C\u0443\u0431\u043B\u044F\u0434\u0441\u043A\u0438\u0439 webm-\u0442\u0440\u0435\u0434', '\u0431\u043E\u0435\u0432\u044B\u0445 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432 \u0442\u0440\u0435\u0434', '\u0441\u0430\u043F \u043C\u0435\u0434\u0430\u0447', '\u0443\u0433\u0430\u0434\u0430\u0439 .+? \u043F\u043E \u043C\u044D\u0434\u0441\u043A\u0438\u043B', '\u043F\u043E\u0441\u0442\u0438\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438', 'hunger games.+#\\d+', '\u0433\u043E\u043B\u043E\u0434\u043D\u044B\u0445 \u0438\u0433\u0440 \u0442\u0440\u0435\u0434', 'homescreen thread', '\u0432\u044B\u0431\u043E\u0440\u0430 \\w+\u0432\u0438\u0437\u043E\u0440\u0430 \u0442\u0440\u0435', '\u0430 \u043A\u0430\u043A \u043F\u0440\u043E\u0448\u043B\u0438 \u0442\u0432\u043E\u0438 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435', '\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u044C \u043E\u043B\u0434\u0444\u0430\u0433\u043E\u0432', '\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0451\u043B\u043A\u0430:', '\u0434\u0435\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0442\u0440\u0435\u0434', '\u043B\u0438\u043A\u0431\u0435\u0437 \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u0441\u043B\u0430\u0432\u0438\u044E', '\u0432\u0430\u0441 \u043F\u043E\u0441\u0435\u0442\u0438\u043B', '\u043A\u0440\u044F-\u043A\u0440\u044F \u0432 \u044D\u0442\u043E\u043C \u0442\u0440\u0435\u0434\u0435', 'vocaroo thread', '\u043A\u0430\u043A \u043F\u0440\u043E\u0448\u043B\u0438 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438', '\u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043C \u043E.*\u0434\u0443\u0445\u0430\u0445', '\u043F\u043E\u0441\u043E\u0432\u0435\u0442\u0443\u0439\u0442\u0435 \u0447\u0435\u043C.+\u0437\u0430\u043D\u044F\u0442\u044C', '\u043A\u0430\u043A \u0437\u0430\u0432\u0435\u0441\u0442\u0438 \u0434\u0440\u0443\u0437\u0435\u0439', '\u0437\u0430\u0432\u0442\u0440\u0430\u043A\u0430 \u0430\u043D\u043E\u043D\u0430 \u0442\u0440\u0435\u0434', '\u0441\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F', '\u0434\u0430\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0435', '\u0435\u0441\u043B\u0438 \u0436\u0438\u0432\u0435\u0442\u0435 \u0441 \u0442\u044F\u043D', '\u043A\u0430\u043A \u0432\u0430\u043C \u043A\u0438\u043D\u0446\u043E', '\u0434\u043E\u0431\u0440\u043E\u043F\u043E\u0447\u0442\u0430', '\u043B\u043E\u0442\u0440 \u0442\u0440\u0435\u0434', '\u0438\u0434\u0443 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043A \u0442\u044F\u043D \u0432 \u0433\u043E\u0441\u0442\u0438']);
      var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault_pjxt3m$($receiver, 10));
      var tmp$0;
      tmp$0 = $receiver.iterator();
      while (tmp$0.hasNext()) {
        var item = tmp$0.next();
        destination.add_za3rmp$(Kotlin.modules['stdlib'].kotlin.text.Regex_sb3q2$(item, Kotlin.modules['stdlib'].kotlin.text.RegexOption.object.IGNORE_CASE));
      }
      this.items = destination;
    });
  }, /** @lends _ */ {
    main_kand9s$: function (args) {
      var $receiver = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('thread'));
      var destination = new Kotlin.ArrayList();
      var tmp$0;
      tmp$0 = $receiver.iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        var main_kand9s$f$result;
        main_kand9s$f$break: {
          var tmp$3, tmp$1;
          var text = (tmp$1 = (tmp$3 = element.getElementsByClassName('post-message')[0]) != null ? tmp$3.textContent : null) != null ? tmp$1 : '';
          var tmp$2;
          tmp$2 = _.StopWords.items.iterator();
          while (tmp$2.hasNext()) {
            var element_0 = tmp$2.next();
            if (element_0.containsMatchIn_6bul2c$(text)) {
              main_kand9s$f$result = true;
              break main_kand9s$f$break;
            }
          }
          main_kand9s$f$result = false;
        }
        if (main_kand9s$f$result) {
          destination.add_za3rmp$(element);
        }
      }
      var tmp$4;
      tmp$4 = destination.iterator();
      while (tmp$4.hasNext()) {
        var element_1 = tmp$4.next();
        var tmp$5;
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true);
        (tmp$5 = element_1.getElementsByClassName('postbtn-hide')[0]) != null ? tmp$5.dispatchEvent(clickEvent) : null;
      }
      var $receiver_0 = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('post-wrapper'));
      var destination_0 = new Kotlin.ArrayList();
      var tmp$6;
      tmp$6 = $receiver_0.iterator();
      while (tmp$6.hasNext()) {
        var element_2 = tmp$6.next();
        if (Kotlin.modules['stdlib'].kotlin.text.startsWith_41xvrb$(element_2.id, 'post-') && _.isSage(element_2)) {
          destination_0.add_za3rmp$(element_2);
        }
      }
      var destination_1 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault_pjxt3m$(destination_0, 10));
      var tmp$7;
      tmp$7 = destination_0.iterator();
      while (tmp$7.hasNext()) {
        var item = tmp$7.next();
        destination_1.add_za3rmp$(Kotlin.modules['stdlib'].kotlin.text.replace_dn5w6f$(item.id, 'post-', ''));
      }
      var tmp$8;
      tmp$8 = destination_1.iterator();
      while (tmp$8.hasNext()) {
        var element_3 = tmp$8.next();
        Post(element_3).hide(true);
      }
      var $receiver_1 = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('spoiler'));
      var tmp$9;
      tmp$9 = $receiver_1.iterator();
      while (tmp$9.hasNext()) {
        var element_4 = tmp$9.next();
        element_4.style.color = '#a0a0a0';
      }
      var $receiver_2 = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('post-wrapper'));
      var destination_2 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault_pjxt3m$($receiver_2, 10));
      var tmp$10;
      tmp$10 = $receiver_2.iterator();
      while (tmp$10.hasNext()) {
        var item_0 = tmp$10.next();
        destination_2.add_za3rmp$(new _.Message(item_0));
      }
      var messages = destination_2;
      var tmp$11;
      tmp$11 = messages.iterator();
      while (tmp$11.hasNext()) {
        var element_5 = tmp$11.next();
        element_5.element.style.marginLeft = (20 * element_5.computeLevel_don60$(messages)).toString() + 'px';
      }
    },
    isSage: function (thread) {
      var $receiver = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(thread.getElementsByClassName('post-email'));
      var tmp$0;
      tmp$0 = $receiver.iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        var tmp$1;
        if (Kotlin.modules['stdlib'].kotlin.text.equals_41xvrb$('mailto:sage', (tmp$1 = element.attributes['href']) != null ? tmp$1.value : null, true)) {
          return true;
        }
      }
      return false;
    },
    Message: Kotlin.createClass(function () {
      return [Kotlin.Comparable];
    }, function (element) {
      var tmp$0;
      this.element = element;
      this.id = parseInt(Kotlin.modules['stdlib'].kotlin.text.replace_dn5w6f$(this.element.id, 'post-', ''));
      var $receiver = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(this.element.getElementsByClassName('post-message'));
      var destination = new Kotlin.ArrayList();
      var tmp$1;
      tmp$1 = $receiver.iterator();
      while (tmp$1.hasNext()) {
        var element_0 = tmp$1.next();
        var list = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(element_0.getElementsByClassName('post-reply-link'));
        Kotlin.modules['stdlib'].kotlin.collections.addAll_p6ac9a$(destination, list);
      }
      var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault_pjxt3m$(destination, 10));
      var tmp$2;
      tmp$2 = destination.iterator();
      while (tmp$2.hasNext()) {
        var item = tmp$2.next();
        var tmp$3;
        destination_0.add_za3rmp$((tmp$3 = item.attributes['data-num']) != null ? tmp$3.value : null);
      }
      var destination_1 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault_pjxt3m$(destination_0, 10));
      var tmp$4;
      tmp$4 = destination_0.iterator();
      while (tmp$4.hasNext()) {
        var item_0 = tmp$4.next();
        destination_1.add_za3rmp$(item_0 != null ? Kotlin.modules['stdlib'].kotlin.let_7hr6ff$(item_0, _.Message.f) : null);
      }
      this.parent = (tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.firstOrNull_fvq2g0$(destination_1)) != null ? tmp$0 : 0;
    }, /** @lends _.Message.prototype */ {
      computeLevel_don60$: function (messages) {
        var tmp$0, tmp$1;
        if (this.parent === 0)
          return 0;
        var curId = {v: this.parent};
        var level = 0;
        do {
          level++;
          var firstOrNull_azvtw4$result;
          firstOrNull_azvtw4$break: {
            var tmp$2;
            tmp$2 = messages.iterator();
            while (tmp$2.hasNext()) {
              var element = tmp$2.next();
              if (element.id === curId.v) {
                firstOrNull_azvtw4$result = element;
                break firstOrNull_azvtw4$break;
              }
            }
            firstOrNull_azvtw4$result = null;
          }
          curId.v = (tmp$1 = (tmp$0 = firstOrNull_azvtw4$result) != null ? tmp$0.parent : null) != null ? tmp$1 : 0;
        }
         while (curId.v != null);
        return level;
      },
      compareTo_za3rmp$: function (other) {
        return this.parent !== other.parent ? other.parent - this.parent : other.id - this.id;
      }
    }, /** @lends _.Message */ {
      f: function (it) {
        return parseInt(it);
      }
    })
  });
  Kotlin.defineModule('ChanCleaner', _);
  _.main_kand9s$([]);
}(Kotlin));
