/**
 * Created by y2k on 1/10/16.
 */
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.asList
import kotlin.text.Regex
import kotlin.text.RegexOption

fun main(args: Array<String>) {
    val stopPatterns = listOf(
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
        "hunger games #\\d+",
        "выбора \\w+визора тре",
        "кря-кря в этом треде"
    ).map { Regex(it, RegexOption.IGNORE_CASE) }

    window.onload = {
        document
            .getElementsByClassName("thread").asList()
            .filter {
                val text = it.getElementsByClassName("post-message")[0]?.textContent ?: ""
                stopPatterns.any { it.containsMatchIn(text) }
            }
            .forEach { it.hidden = true }
    }
}