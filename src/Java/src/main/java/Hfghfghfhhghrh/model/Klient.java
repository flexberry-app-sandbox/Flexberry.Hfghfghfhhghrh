package Hfghfghfhhghrh.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hfghfghfhhghrh.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISHfghfghfhhghrhКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПаспорта")
    private Integer номерпаспорта;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "СерияПаспорта")
    private Integer серияпаспорта;

    @Column(name = "Полис")
    private Integer полис;

    @Column(name = "КодКлиента")
    private Integer кодклиента;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "ДатаРождения")
    private Integer датарождения;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(Integer номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public Integer getСерияПаспорта() {
      return серияпаспорта;
    }

    public void setСерияПаспорта(Integer серияпаспорта) {
      this.серияпаспорта = серияпаспорта;
    }

    public Integer getПолис() {
      return полис;
    }

    public void setПолис(Integer полис) {
      this.полис = полис;
    }

    public Integer getКодКлиента() {
      return кодклиента;
    }

    public void setКодКлиента(Integer кодклиента) {
      this.кодклиента = кодклиента;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public Integer getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Integer датарождения) {
      this.датарождения = датарождения;
    }


}