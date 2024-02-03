/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.resources.ast.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public final class ContainerValue {
    private final Value value;

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    private ContainerValue(Value value) {
        this.value = value;
    }

    public <T> T visit(Visitor<T> visitor) {
        return value.visit(visitor);
    }

    public static ContainerValue list(List<FieldValue> value) {
        return new ContainerValue(new ListValue(value));
    }

    public static ContainerValue optional(Optional<FieldValue> value) {
        return new ContainerValue(new OptionalValue(value));
    }

    public boolean isList() {
        return value instanceof ListValue;
    }

    public boolean isOptional() {
        return value instanceof OptionalValue;
    }

    public boolean _isUnknown() {
        return value instanceof _UnknownValue;
    }

    public Optional<List<FieldValue>> getList() {
        if (isList()) {
            return Optional.of(((ListValue) value).value);
        }
        return Optional.empty();
    }

    public Optional<Optional<FieldValue>> getOptional() {
        if (isOptional()) {
            return Optional.of(((OptionalValue) value).value);
        }
        return Optional.empty();
    }

    public Optional<Object> _getUnknown() {
        if (_isUnknown()) {
            return Optional.of(((_UnknownValue) value).value);
        }
        return Optional.empty();
    }

    @JsonValue
    private Value getValue() {
        return this.value;
    }

    public interface Visitor<T> {
        T visitList(List<FieldValue> list);

        T visitOptional(Optional<FieldValue> optional);

        T _visitUnknown(Object unknownType);
    }

    @JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true, defaultImpl = _UnknownValue.class)
    @JsonSubTypes({@JsonSubTypes.Type(ListValue.class), @JsonSubTypes.Type(OptionalValue.class)})
    @JsonIgnoreProperties(ignoreUnknown = true)
    private interface Value {
        <T> T visit(Visitor<T> visitor);
    }

    @JsonTypeName("list")
    private static final class ListValue implements Value {
        @JsonProperty("value")
        private List<FieldValue> value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private ListValue(@JsonProperty("value") List<FieldValue> value) {
            this.value = value;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitList(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof ListValue && equalTo((ListValue) other);
        }

        private boolean equalTo(ListValue other) {
            return value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.value);
        }

        @java.lang.Override
        public String toString() {
            return "ContainerValue{" + "value: " + value + "}";
        }
    }

    @JsonTypeName("optional")
    private static final class OptionalValue implements Value {
        @JsonProperty("value")
        private Optional<FieldValue> value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private OptionalValue(@JsonProperty("value") Optional<FieldValue> value) {
            this.value = value;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitOptional(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof OptionalValue && equalTo((OptionalValue) other);
        }

        private boolean equalTo(OptionalValue other) {
            return value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.value);
        }

        @java.lang.Override
        public String toString() {
            return "ContainerValue{" + "value: " + value + "}";
        }
    }

    private static final class _UnknownValue implements Value {
        private String type;

        @JsonValue
        private Object value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private _UnknownValue(@JsonProperty("value") Object value) {}

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor._visitUnknown(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof _UnknownValue && equalTo((_UnknownValue) other);
        }

        private boolean equalTo(_UnknownValue other) {
            return type.equals(other.type) && value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.type, this.value);
        }

        @java.lang.Override
        public String toString() {
            return "ContainerValue{" + "type: " + type + ", value: " + value + "}";
        }
    }
}