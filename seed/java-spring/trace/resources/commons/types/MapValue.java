/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.commons.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = MapValue.Builder.class
)
public final class MapValue {
  private final List<KeyValuePair> keyValuePairs;

  private MapValue(List<KeyValuePair> keyValuePairs) {
    this.keyValuePairs = keyValuePairs;
  }

  @JsonProperty("keyValuePairs")
  public List<KeyValuePair> getKeyValuePairs() {
    return keyValuePairs;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof MapValue && equalTo((MapValue) other);
  }

  private boolean equalTo(MapValue other) {
    return keyValuePairs.equals(other.keyValuePairs);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.keyValuePairs);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static Builder builder() {
    return new Builder();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder {
    private List<KeyValuePair> keyValuePairs = new ArrayList<>();

    private Builder() {
    }

    public Builder from(MapValue other) {
      keyValuePairs(other.getKeyValuePairs());
      return this;
    }

    @JsonSetter(
        value = "keyValuePairs",
        nulls = Nulls.SKIP
    )
    public Builder keyValuePairs(List<KeyValuePair> keyValuePairs) {
      this.keyValuePairs.clear();
      this.keyValuePairs.addAll(keyValuePairs);
      return this;
    }

    public Builder addKeyValuePairs(KeyValuePair keyValuePairs) {
      this.keyValuePairs.add(keyValuePairs);
      return this;
    }

    public Builder addAllKeyValuePairs(List<KeyValuePair> keyValuePairs) {
      this.keyValuePairs.addAll(keyValuePairs);
      return this;
    }

    public MapValue build() {
      return new MapValue(keyValuePairs);
    }
  }
}