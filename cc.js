(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(function () {
    this.StopWords = Kotlin.createObject(null, function () {
      var $receiver = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$(['\u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u0431\u044B\u0434\u043B\u0430', '\u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u0435\u0432\u0440\u043E\u043F\u044B \u0442\u0440\u0435\u0434', '\u0435\u0431\u0430\u043D\u0443\u0442\u044B\u0445 \u043F\u043E\u0441\u0442\u0443\u043F\u043A\u043E\u0432 \u0430\u043D\u043E\u043D\u0430', '\u0442\u044B \u043D\u0435 \u0434\u043E\u0436\u0438\u0432\u0435\u0448\u044C \u0434\u043E \\d+ \u0433\u043E\u0434', '\u043D\u0430\u0431\u043E\u0440\u0430 \u0432\u0435\u0441\u0430 \u0442\u0440\u0435\u0434', '\u0443\u0433\u0430\u0434\u0430\u0439 \u0444\u0438\u043B\u044C\u043C', '\u043A\u0430\u043A \u0431\u0440\u0438\u0442\u044C\u0441\u044F', '\u0440\u043E\u0441\u0442\u043E\u043C \u043D\u0438\u0436\u0435', '\u043D\u0438\u0449\u0435\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0442\u0440\u0435\u0434', '\u0444\u044D\u043D\u0442\u0435\u0437\u0438-\u0442\u0440\u0435\u0434', '\u043F\u043E\u0435\u0437\u0434-\u0442\u0440\u0435\u0434', '\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043B\u044E\u0431\u043E\u0432\u044C', '\u043F\u0440\u043E\u0448\u0443 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0443\u0439\u0442\u0435', '\u043B\u0435\u0432\u044B\u0445 \u043E\u0442\u043C\u0430\u0437\u043E\u043A \u0442\u0440\u0435\u0434', '\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u044C-\u0442\u0440\u0435\u0434', '\u0442\u043D\u0443\u0441 - \u0442\u044F\u043D \u043D\u0435 \u0443\u043C\u0435\u044E\u0442 \u0441\u0440\u0430\u0442\u044C', '\u043C\u044B\u0448\u0430\u0447 \u0442\u0440\u0435\u0434', '\u0442\u0432\u043E\u0435\u0439 \u0442\u044F\u043D\u043A\u0438 \u0442\u0440\u0435\u0434', '\u0433\u0440\u0443\u0441\u0442\u043D\u043E\u0442\u0440\u0435\u0434', '\u0443\u0436\u0438\u043D\u0430 \u0430\u043D\u043E\u043D\u0430', '\u0430\u043D\u0438\u043C\u0443\u0431\u043B\u044F\u0434\u0441\u043A\u0438\u0439 webm-\u0442\u0440\u0435\u0434', '\u0431\u043E\u0435\u0432\u044B\u0445 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432 \u0442\u0440\u0435\u0434', '\u0441\u0430\u043F \u043C\u0435\u0434\u0430\u0447', '\u0443\u0433\u0430\u0434\u0430\u0439 .+? \u043F\u043E \u043C\u044D\u0434\u0441\u043A\u0438\u043B', '\u043F\u043E\u0441\u0442\u0438\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438', 'hunger games.+#\\d+', '\u0433\u043E\u043B\u043E\u0434\u043D\u044B\u0445 \u0438\u0433\u0440 \u0442\u0440\u0435\u0434', 'homescreen thread', '\u0432\u044B\u0431\u043E\u0440\u0430 \\w+\u0432\u0438\u0437\u043E\u0440\u0430 \u0442\u0440\u0435', '\u0430 \u043A\u0430\u043A \u043F\u0440\u043E\u0448\u043B\u0438 \u0442\u0432\u043E\u0438 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435', '\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u044C \u043E\u043B\u0434\u0444\u0430\u0433\u043E\u0432', '\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0451\u043B\u043A\u0430:', '\u0434\u0435\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0442\u0440\u0435\u0434', '\u043B\u0438\u043A\u0431\u0435\u0437 \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u0441\u043B\u0430\u0432\u0438\u044E', '\u0432\u0430\u0441 \u043F\u043E\u0441\u0435\u0442\u0438\u043B', '\u043A\u0440\u044F-\u043A\u0440\u044F \u0432 \u044D\u0442\u043E\u043C \u0442\u0440\u0435\u0434\u0435', 'vocaroo thread', '\u043A\u0430\u043A \u043F\u0440\u043E\u0448\u043B\u0438 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438', '\u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043C \u043E.*\u0434\u0443\u0445\u0430\u0445', '\u043F\u043E\u0441\u043E\u0432\u0435\u0442\u0443\u0439\u0442\u0435 \u0447\u0435\u043C.+\u0437\u0430\u043D\u044F\u0442\u044C', '\u043A\u0430\u043A \u0437\u0430\u0432\u0435\u0441\u0442\u0438 \u0434\u0440\u0443\u0437\u0435\u0439', '\u0437\u0430\u0432\u0442\u0440\u0430\u043A\u0430 \u0430\u043D\u043E\u043D\u0430 \u0442\u0440\u0435\u0434', '\u0441\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0432\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F', '\u0434\u0430\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0435', '\u0435\u0441\u043B\u0438 \u0436\u0438\u0432\u0435\u0442\u0435 \u0441 \u0442\u044F\u043D', '\u043A\u0430\u043A \u0432\u0430\u043C \u043A\u0438\u043D\u0446\u043E', '\u0434\u043E\u0431\u0440\u043E\u043F\u043E\u0447\u0442\u0430', '\u043B\u043E\u0442\u0440 \u0442\u0440\u0435\u0434', '\u0438\u0434\u0443 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043A \u0442\u044F\u043D \u0432 \u0433\u043E\u0441\u0442\u0438']);
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
    isThread_4wc2mi$: function ($receiver) {
      var tmp$0;
      return Kotlin.modules['stdlib'].kotlin.text.contains_kzp0od$(((tmp$0 = $receiver.location) != null ? tmp$0 : Kotlin.throwNPE()).pathname, '/res/');
    },
    isSage_y4uc6y$: function ($receiver) {
      var $receiver_0 = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$($receiver.getElementsByClassName('post-email'));
      var tmp$0;
      tmp$0 = $receiver_0.iterator();
      while (tmp$0.hasNext()) {
        var element = tmp$0.next();
        var tmp$1;
        if (Kotlin.modules['stdlib'].kotlin.text.equals_41xvrb$('mailto:sage', (tmp$1 = element.attributes['href']) != null ? tmp$1.value : null, true)) {
          return true;
        }
      }
      return false;
    },
    HierarchySorter: Kotlin.createClass(null, function (items, root) {
      this.root_j6pas0$ = root;
      this.source_tms2uv$ = Kotlin.modules['stdlib'].java.util.ArrayList_4fm7v2$(items);
      this.result_u9cuph$ = new Kotlin.ArrayList();
    }, /** @lends _.HierarchySorter.prototype */ {
      sort: function () {
        this.extract(this.root_j6pas0$);
        this.extract(0);
        this.result_u9cuph$.addAll_4fm7v2$(this.source_tms2uv$);
        return this.result_u9cuph$;
      },
      extract: function (id) {
        var $receiver = this.source_tms2uv$;
        var destination = new Kotlin.ArrayList();
        var tmp$0;
        tmp$0 = $receiver.iterator();
        while (tmp$0.hasNext()) {
          var element = tmp$0.next();
          if (element.parent === id) {
            destination.add_za3rmp$(element);
          }
        }
        var childs = destination;
        Kotlin.modules['stdlib'].kotlin.collections.removeAll_v06vm4$(this.source_tms2uv$, _.HierarchySorter.extract$f_0(id));
        var action = _.HierarchySorter.extract$f_1(this);
        var tmp$1;
        tmp$1 = childs.iterator();
        while (tmp$1.hasNext()) {
          var element_0 = tmp$1.next();
          action(element_0);
        }
      }
    }, /** @lends _.HierarchySorter */ {
      extract$f_0: function (id) {
        return function (it) {
          return it.parent === id;
        };
      },
      extract$f_1: function (this$HierarchySorter) {
        return function (it) {
          this$HierarchySorter.result_u9cuph$.add_za3rmp$(it);
          this$HierarchySorter.extract(it.id);
        };
      }
    }),
    main_kand9s$: function (args) {
      var tmp$0, tmp$1, tmp$2;
      var $receiver = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('post-wrapper'));
      var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collections.collectionSizeOrDefault_pjxt3m$($receiver, 10));
      var tmp$3;
      tmp$3 = $receiver.iterator();
      while (tmp$3.hasNext()) {
        var item = tmp$3.next();
        destination.add_za3rmp$(new _.Message(item));
      }
      var posts = destination;
      var destination_0 = new Kotlin.ArrayList();
      var tmp$4;
      tmp$4 = posts.iterator();
      while (tmp$4.hasNext()) {
        var element = tmp$4.next();
        if (element.isSage) {
          destination_0.add_za3rmp$(element);
        }
      }
      var tmp$5;
      tmp$5 = destination_0.iterator();
      while (tmp$5.hasNext()) {
        var element_0 = tmp$5.next();
        Post(element_0.id).hide(true);
      }
      var $receiver_0 = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('spoiler'));
      var tmp$6;
      tmp$6 = $receiver_0.iterator();
      while (tmp$6.hasNext()) {
        var element_1 = tmp$6.next();
        element_1.style.color = '#a0a0a0';
      }
      if (_.isThread_4wc2mi$(document)) {
        var $receiver_1 = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(document.getElementsByClassName('thread'));
        var destination_1 = new Kotlin.ArrayList();
        var tmp$7;
        tmp$7 = $receiver_1.iterator();
        while (tmp$7.hasNext()) {
          var element_2 = tmp$7.next();
          var main_kand9s$f_3$result;
          main_kand9s$f_3$break: {
            var tmp$10, tmp$9;
            var text = (tmp$9 = (tmp$10 = element_2.getElementsByClassName('post-message')[0]) != null ? tmp$10.textContent : null) != null ? tmp$9 : '';
            var tmp$8;
            tmp$8 = _.StopWords.items.iterator();
            while (tmp$8.hasNext()) {
              var element_3 = tmp$8.next();
              if (element_3.containsMatchIn_6bul2c$(text)) {
                main_kand9s$f_3$result = true;
                break main_kand9s$f_3$break;
              }
            }
            main_kand9s$f_3$result = false;
          }
          if (main_kand9s$f_3$result) {
            destination_1.add_za3rmp$(element_2);
          }
        }
        var tmp$11;
        tmp$11 = destination_1.iterator();
        while (tmp$11.hasNext()) {
          var element_4 = tmp$11.next();
          var tmp$12;
          var clickEvent = document.createEvent('MouseEvents');
          clickEvent.initEvent('click', true, true);
          (tmp$12 = element_4.getElementsByClassName('postbtn-hide')[0]) != null ? tmp$12.dispatchEvent(clickEvent) : null;
        }
      }
       else {
        var rootMessage = parseInt(((tmp$1 = ((tmp$0 = document.getElementById('qr-thread')) != null ? tmp$0 : Kotlin.throwNPE()).attributes['value']) != null ? tmp$1 : Kotlin.throwNPE()).value);
        var messageParentNode = (tmp$2 = posts.get_za3lpa$(0).element.parentNode) != null ? tmp$2 : Kotlin.throwNPE();
        var $receiver_2 = (new _.HierarchySorter(posts, rootMessage)).sort();
        var tmp$13;
        tmp$13 = $receiver_2.iterator();
        while (tmp$13.hasNext()) {
          var element_5 = tmp$13.next();
          element_5.element.style.marginLeft = (20 * element_5.computeLevel_j3xzrm$(rootMessage, posts)).toString() + 'px';
          messageParentNode.appendChild(element_5.element);
        }
      }
    },
    Message: Kotlin.createClass(null, function (element) {
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
      isSage: {
        get: function () {
          var $receiver = Kotlin.modules['stdlib'].kotlin.dom.asList_sg7yuw$(this.element.getElementsByClassName('post-email'));
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
        }
      },
      computeLevel_j3xzrm$: function (root, messages) {
        var tmp$0, tmp$1;
        if (this.parent === 0)
          return 0;
        if (this.parent === root)
          return 1;
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
         while (curId.v !== 0);
        return level;
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
