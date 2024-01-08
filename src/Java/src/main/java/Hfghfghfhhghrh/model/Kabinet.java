package Hfghfghfhhghrh.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hfghfghfhhghrh.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Кабинет
 */
@Entity(name = "IISHfghfghfhhghrhКабинет")
@Table(schema = "public", name = "Кабинет")
public class Kabinet {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКабинета")
    private Integer номеркабинета;


    public Kabinet() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКабинета() {
      return номеркабинета;
    }

    public void setНомерКабинета(Integer номеркабинета) {
      this.номеркабинета = номеркабинета;
    }


}