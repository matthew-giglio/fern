/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.v2.problem.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = GetBasicSolutionFileRequest.Builder.class
)
public final class GetBasicSolutionFileRequest {
  private final String methodName;

  private final NonVoidFunctionSignature signature;

  private GetBasicSolutionFileRequest(String methodName, NonVoidFunctionSignature signature) {
    this.methodName = methodName;
    this.signature = signature;
  }

  @JsonProperty("methodName")
  public String getMethodName() {
    return methodName;
  }

  @JsonProperty("signature")
  public NonVoidFunctionSignature getSignature() {
    return signature;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof GetBasicSolutionFileRequest && equalTo((GetBasicSolutionFileRequest) other);
  }

  private boolean equalTo(GetBasicSolutionFileRequest other) {
    return methodName.equals(other.methodName) && signature.equals(other.signature);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.methodName, this.signature);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static MethodNameStage builder() {
    return new Builder();
  }

  public interface MethodNameStage {
    SignatureStage methodName(String methodName);

    Builder from(GetBasicSolutionFileRequest other);
  }

  public interface SignatureStage {
    _FinalStage signature(NonVoidFunctionSignature signature);
  }

  public interface _FinalStage {
    GetBasicSolutionFileRequest build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements MethodNameStage, SignatureStage, _FinalStage {
    private String methodName;

    private NonVoidFunctionSignature signature;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(GetBasicSolutionFileRequest other) {
      methodName(other.getMethodName());
      signature(other.getSignature());
      return this;
    }

    @java.lang.Override
    @JsonSetter("methodName")
    public SignatureStage methodName(String methodName) {
      this.methodName = methodName;
      return this;
    }

    @java.lang.Override
    @JsonSetter("signature")
    public _FinalStage signature(NonVoidFunctionSignature signature) {
      this.signature = signature;
      return this;
    }

    @java.lang.Override
    public GetBasicSolutionFileRequest build() {
      return new GetBasicSolutionFileRequest(methodName, signature);
    }
  }
}