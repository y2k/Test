import kotlin.text.Regex
import kotlin.text.RegexOption

/**
 * Created by y2k on 1/11/16.
 */
object StopWords {

    val items = listOf(
        "угадай фильм",
        "как бриться",
        "ростом ниже",
        "нищетелефона тред",
        "фэнтези-тред",
        "поезд-тред",
        "что такое любовь",
        "прошу пожертвуйте",
        "левых отмазок тред",
        "беларусь-тред",
        "тнус - тян не умеют срать",
        "мышач тред",
        "твоей тянки тред",
        "грустнотред",
        "ужина анона",
        "анимублядский webm-тред",
        "боевых искусств тред",
        "сап медач",
        "угадай .+? по мэдскил",
        "постим интересные истории",
        "hunger games.+#\\d+",
        "голодных игр тред",
        "homescreen thread",
        "выбора \\w+визора тре",
        "а как прошли твои выходные",
        "перепись олдфагов",
        "идеальная тёлка:",
        "ликбез по православию",
        "вас посетил",
        "кря-кря в этом треде",
        "vocaroo thread",
        "как прошли праздники",
        "поговорим о.*духах",
        "посоветуйте чем.+занять",
        "как завести друзей",
        "завтрака анона тред",
        "ссылка для вступления",
        "дай доступ в е",
        "если живете с тян",
        "как вам кинцо",
        "добропочта",
        "лотр тред",
        "иду сегодня к тян в гости"
    ).map { Regex(it, RegexOption.IGNORE_CASE) }
}