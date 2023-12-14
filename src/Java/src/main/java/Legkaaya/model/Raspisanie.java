package Legkaaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Legkaaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Расписание
 */
@Entity(name = "IISLegkaayaРасписание")
@Table(schema = "public", name = "Расписание")
public class Raspisanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВремяУборки")
    private String времяуборки;

    @Column(name = "ВремяКормления")
    private String времякормления;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Korm")
    @Convert("Korm")
    @Column(name = "Корм", length = 16, unique = true, nullable = false)
    private UUID _kormid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Korm", insertable = false, updatable = false)
    private Korm korm;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHivotnye")
    @Convert("ZHivotnye")
    @Column(name = "Животные", length = 16, unique = true, nullable = false)
    private UUID _zhivotnyeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHivotnye", insertable = false, updatable = false)
    private ZHivotnye zhivotnye;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kletka")
    @Convert("Kletka")
    @Column(name = "Клетка", length = 16, unique = true, nullable = false)
    private UUID _kletkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kletka", insertable = false, updatable = false)
    private Kletka kletka;


    public Raspisanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВремяУборки() {
      return времяуборки;
    }

    public void setВремяУборки(String времяуборки) {
      this.времяуборки = времяуборки;
    }

    public String getВремяКормления() {
      return времякормления;
    }

    public void setВремяКормления(String времякормления) {
      this.времякормления = времякормления;
    }


}